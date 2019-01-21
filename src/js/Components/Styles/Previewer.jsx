import l, { pr_store } from "../../utils";

const {
	compact,
	forEach,
	isEmpty,
	isUndefined,
	union,
	map,
	pick,
	isEqual
} = lodash;
const { Component } = wp.element;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class Previewer extends Component {
	componentDidMount = () => {
		const {
			updatePreviewerData,
			updateTypographiesVisibility,
			updateSingleVisibility
		} = this.props;
		const api = wp.customize;

		api.previewer.bind("ready", () => {
			// Listen to the current post data sent from the Previewer window.
			api.previewer.bind("thet-data", data => {
				updatePreviewerData(data);
				updateTypographiesVisibility(data);
				updateSingleVisibility(data);
			});
		});
	};

	componentDidUpdate = prev_props => {
		this.updatePreviewStyles();
		if (
			!isEmpty(this.props.gfonts) &&
			!isEqual(this.props.gfonts, prev_props.gfonts)
		) {
			this.updatePreviewFonts();
		}
	};

	updatePreviewFonts = () => {
		const { gfonts } = this.props;

		wp.customize.previewer.send("thet-gfonts", gfonts);
	};

	updatePreviewStyles = () => {
		const { styles } = this.props;

		wp.customize.previewer.send("thet-styles", styles);
	};

	render() {
		return null;
	}
}

export default compose([
	withSelect(select => {
		const {
			getSingleFontFamily,
			getTypographyStyles,
			getSingleId,
			getSingleStyle,
			getGFonts
		} = select(pr_store);
		const gfonts_raw = getGFonts();
		const styles_raw = getTypographyStyles();
		const single_style = getSingleStyle();
		const single_id = getSingleId();
		const single_font_family = getSingleFontFamily();
		let styles = [];
		let font_families = [];
		let single_applied = false;

		// Styles
		if (single_style === "") {
			styles = styles_raw.map(({ style }) => style);
		} else if (single_style === null) {
			styles = styles_raw
				.filter(({ id }) => id !== single_id)
				.map(({ style }) => style);
		} else if (single_id === 0) {
			styles = styles_raw.map(({ style }) => style).concat(single_style);
		} else {
			styles = styles_raw.map(({ id, style }) => {
				if (id === single_id) {
					single_applied = true;
					return single_style;
				}

				return style;
			});

			if (!single_applied) {
				styles = [...styles, single_style];
			}
		}

		if (single_id === 0) {
			font_families = styles_raw
				.map(({ font_family }) => font_family)
				.concat(single_font_family);
		} else {
			font_families = styles_raw
				.filter(({ id }) => id !== single_id)
				.map(({ font_family }) => font_family)
				.concat(single_font_family);
		}

		font_families = compact(font_families);

		styles = styles.join("");

		// Fonts
		const gfonts_to_load = {};
		let gfonts = pick(gfonts_raw, font_families);

		forEach(gfonts, (variants, family) => {
			if (isUndefined(gfonts_to_load[family])) {
				gfonts_to_load[family] = [];
			}

			const variants_to_load = variants.filter(({ loaded }) => !loaded);

			gfonts_to_load[family] = union(variants_to_load, gfonts_to_load[family]);
		});

		if (!isEmpty(gfonts_to_load)) {
			gfonts = map(gfonts_to_load, (variants, family) => {
				family = family.replace(/_/g, "+");
				variants = map(variants, ({ variant }) => variant).join(",");
				variants = variants === "" ? "400" : variants;

				return `${family}:${variants}`;
			});
		} else {
			gfonts = [];
		}

		return { styles, gfonts };
	}),
	withDispatch(dispatch => {
		const {
			updatePreviewerData,
			updateTypographiesVisibility,
			updateSingleVisibility
		} = dispatch(pr_store);

		return {
			updatePreviewerData,
			updateTypographiesVisibility,
			updateSingleVisibility
		};
	})
])(Previewer);
