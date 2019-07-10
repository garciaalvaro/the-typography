import l, { is_customizer, pr_store } from "utils";
import WebFont from "webfontloader";

interface withSelect {
	gfonts_to_load: GFontVariants[];
	gfonts_for_previewer: GFont[];
}
interface withDispatch {
	updateGFontsLoaded: ActionCreators["updateGFontsLoaded"];
}
interface withState extends setState<withState> {
	previewer_ready_counter: number;
}
type Props = withSelect & withDispatch & withState;

const { isEqual, intersection, uniq } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class GFonts extends Component<Props> {
	componentDidMount = () => {
		this.loadFonts();

		if (is_customizer) {
			wp.customize.previewer.bind("ready", () => {
				this.props.setState({
					previewer_ready_counter: this.props.previewer_ready_counter + 1
				});
			});
		}
	};

	componentDidUpdate = (prev_props: Props) => {
		const {
			previewer_ready_counter,
			gfonts_for_previewer,
			gfonts_to_load
		} = this.props;

		if (!isEqual(gfonts_to_load, prev_props.gfonts_to_load)) {
			this.loadFonts();
		}

		if (
			gfonts_for_previewer.length &&
			previewer_ready_counter > prev_props.previewer_ready_counter
		) {
			wp.customize.previewer.send("thet-load_gfonts", gfonts_for_previewer);
		}

		if (
			!isEqual(gfonts_for_previewer, prev_props.gfonts_for_previewer) &&
			previewer_ready_counter > 0
		) {
			wp.customize.previewer.send("thet-load_gfonts", gfonts_for_previewer);
		}
	};

	loadFonts() {
		const { gfonts_to_load, updateGFontsLoaded } = this.props;

		if (!gfonts_to_load.length) {
			return;
		}

		const families = gfonts_to_load.map(({ family, variants }) => {
			const family_prepared = family.replace(/_/g, "+");
			const variants_prepared = variants.join(",");

			return `${family_prepared}:${variants_prepared}`;
		});

		WebFont.load({
			google: {
				families
			},
			active: () => {
				updateGFontsLoaded(gfonts_to_load);
			}
		});
	}

	render() {
		return null;
	}
}

export default compose([
	withState({ previewer_ready_counter: 0 }),
	withSelect<withSelect>(select => {
		const { getGFontsToLoad } = select<SelectorsR["getGFontsToLoad"]>(pr_store);
		const { getGFonts } = select<SelectorsR["getGFonts"]>(pr_store);
		const { getVisibleTypographiesId } = select<
			SelectorsR["getVisibleTypographiesId"]
		>(pr_store);
		const { isSingleVisible } = select<SelectorsR["isSingleVisible"]>(pr_store);
		const { getSingleId } = select<SelectorsR["getSingleId"]>(pr_store);
		let visible_ids = getVisibleTypographiesId();
		const single_is_visible = isSingleVisible();
		const single_id = getSingleId();

		if (single_is_visible && single_id !== null) {
			visible_ids = uniq([...visible_ids, single_id]);
		} else if (single_id) {
			visible_ids = visible_ids.filter(id => id !== single_id);
		}

		const gfonts_for_previewer = getGFonts().filter(
			({ typographies_id }) => intersection(typographies_id, visible_ids).length
		);

		return {
			gfonts_to_load: getGFontsToLoad(),
			gfonts_for_previewer
		};
	}),
	withDispatch(dispatch => {
		const { updateGFontsLoaded } = dispatch(pr_store);

		return { updateGFontsLoaded };
	})
])(GFonts);
