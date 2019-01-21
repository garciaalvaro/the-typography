import l, { pr_store } from "../../utils";
import WebFont from "webfontloader";

const { isEmpty, isUndefined, forEach, map, union } = lodash;
const { Component, createPortal } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class StyleSheet extends Component {
	componentDidUpdate = prev_props => {
		if (!wp.isShallowEqual(this.props.fonts, prev_props.fonts)) {
			this.loadFonts();
		}
	};

	componentDidMount = () => {
		this.loadFonts();
	};

	loadFonts = () => {
		const { fonts, updateLoadedGFonts } = this.props;
		const fonts_to_load = {};

		forEach(fonts, (variants, family) => {
			if (isUndefined(fonts_to_load[family])) {
				fonts_to_load[family] = [];
			}

			const variants_to_load = variants.filter(({ loaded }) => !loaded);

			fonts_to_load[family] = union(variants_to_load, fonts_to_load[family]);
		});

		if (isEmpty(fonts_to_load)) {
			return;
		}

		const families = map(fonts_to_load, (variants, family) => {
			family = family.replace(/_/g, "+");
			variants = map(variants, ({ variant }) => variant).join(",");

			return `${family}:${variants}`;
		});

		WebFont.load({
			google: {
				families
			},
			active: () => {
				updateLoadedGFonts(fonts_to_load);
			}
		});
	};

	render() {
		return null;
	}
}

const StyleSheetConnected = compose([
	withDispatch(dispatch => {
		const { updateLoadedGFonts } = dispatch(pr_store);

		return { updateLoadedGFonts };
	}),
	withSelect(select => {
		const { getGFonts } = select(pr_store);

		return {
			fonts: getGFonts()
		};
	})
])(StyleSheet);

const StyleSheetPortal = () =>
	createPortal(<StyleSheetConnected />, document.body);

export default StyleSheetPortal;
