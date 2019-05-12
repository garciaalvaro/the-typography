import l, { is_customizer, pr_store } from "utils";
import WebFont from "webfontloader";

const { isEqual, intersection, uniq } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class GFonts extends Component {
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

	componentDidUpdate = prev_props => {
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
			family = family.replace(/_/g, "+");
			variants = variants.join(",");

			return `${family}:${variants}`;
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
	withSelect(select => {
		const {
			getGFontsToLoad,
			getGFonts,
			getVisibleTypographiesId,
			getSingleVisibility,
			getSingleId
		} = select(pr_store);
		let visible_ids = getVisibleTypographiesId();
		const single_is_visible = getSingleVisibility();
		const single_id = getSingleId();

		if (single_is_visible) {
			visible_ids = uniq([...visible_ids, single_id]);
		} else if (single_id) {
			visible_ids = visible_ids.filter(id => id !== single_id);
		}

		const gfonts_for_previewer = getGFonts().filter(({ typographies_id }) => {
			return intersection(typographies_id, visible_ids).length;
		});

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
