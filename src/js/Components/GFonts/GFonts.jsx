import l, { is_customizer, pr_store } from "utils";
import WebFont from "webfontloader";

const { isEqual } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class GFonts extends Component {
	componentDidMount = () => {
		this.loadFonts();

		if (is_customizer) {
			wp.customize.previewer.bind("ready", () => {
				if (!this.props.previewer_ready) {
					this.props.setState({ previewer_ready: true });
				}
			});
		}
	};

	componentDidUpdate = prev_props => {
		const {
			previewer_ready,
			gfonts_to_load,
			previewer_fonts_to_load,
			setState
		} = this.props;

		if (!isEqual(gfonts_to_load, prev_props.gfonts_to_load)) {
			this.loadFonts();
		} else if (
			previewer_fonts_to_load.length > 0 &&
			previewer_ready &&
			!prev_props.previewer_ready
		) {
			wp.customize.previewer.send("thet-gfonts", previewer_fonts_to_load);
			setState({ previewer_fonts_to_load: [] });
		}
	};

	loadFonts() {
		const {
			gfonts_to_load,
			loadGFonts,
			previewer_ready,
			setState,
			previewer_fonts_to_load
		} = this.props;

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
				loadGFonts(gfonts_to_load);
			}
		});

		if (is_customizer) {
			if (previewer_ready) {
				wp.customize.previewer.send("thet-gfonts", families);
			} else {
				setState({
					previewer_fonts_to_load: [...previewer_fonts_to_load, ...families]
				});
			}
		}
	}

	render() {
		return null;
	}
}

export default compose([
	withState({ previewer_ready: false, previewer_fonts_to_load: [] }),
	withSelect(select => {
		const { getGFontsToLoad } = select(pr_store);

		return {
			gfonts_to_load: getGFontsToLoad()
		};
	}),
	withDispatch(dispatch => {
		const { loadGFonts } = dispatch(pr_store);

		return { loadGFonts };
	})
])(GFonts);

// // Fonts
// const gfonts_raw = getGFonts();
// const gfonts_to_load = {};
// let gfonts = pick(gfonts_raw, font_families);

// forEach(gfonts, (variants, family) => {
// 	if (isUndefined(gfonts_to_load[family])) {
// 		gfonts_to_load[family] = [];
// 	}

// 	const variants_to_load = variants.filter(({ loaded }) => !loaded);

// 	gfonts_to_load[family] = union(variants_to_load, gfonts_to_load[family]);
// });

// if (!isEmpty(gfonts_to_load)) {
// 	gfonts = map(gfonts_to_load, (variants, family) => {
// 		family = family.replace(/_/g, "+");
// 		variants = map(variants, ({ variant }) => variant).join(",");
// 		variants = variants === "" ? "400" : variants;

// 		return `${family}:${variants}`;
// 	});
// } else {
// 	gfonts = [];
// }

// return { styles, gfonts };
