import l, { pr_store } from "utils";

const { map, pick, isEqual, compact } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

class Style extends Component {
	componentDidMount() {
		this.updateCss();
		this.updateSelector();
	}

	componentDidUpdate(prev_props) {
		const { style, css, selector, selectors, id } = this.props;

		if (!isEqual(style, prev_props.style)) {
			this.updateCss();
			return;
		}

		if (!isEqual(selectors, prev_props.selectors)) {
			this.updateSelector();
			return;
		}

		if (
			!isEqual(css, prev_props.css) ||
			!isEqual(selector, prev_props.selector)
		) {
			wp.customize.previewer.send("thet-styles", { id, selector, css });
		}
	}

	updateSelector() {
		const { setState, selectors } = this.props;
		let selector;
		selector = selectors.map(
			({
				selector_type,
				text_selector,
				block_selector_root,
				block_selector_extra
			}) => {
				if (selector_type === "text") {
					return text_selector;
				} else if (selector_type === "block") {
					return (
						block_selector_root +
						(block_selector_extra ? ` ${block_selector_extra}` : "")
					);
				} else {
					return null;
				}
			}
		);
		selector = compact(selector);

		setState({ selector });
	}

	updateCss() {
		const { setState, style } = this.props;

		const typography = pick(style, [
			"font_family",
			"color",
			"font_size",
			"line_height",
			"letter_spacing",
			"font_style",
			"font_weight",
			"text_transform",
			"text_decoration"
		]);

		let css = [];

		map(typography, (value, key) => {
			if (value === null) {
				return;
			}

			let prop_css = value;

			if (["font_size", "letter_spacing"].includes(key)) {
				prop_css = `${prop_css}px`;
			} else if (key === "font_family") {
				prop_css = prop_css.replace(/_/g, " ");
				prop_css = `'${prop_css}'`;
			}

			prop_css = `${key.replace("_", "-")}:${prop_css}`;

			css.push(prop_css);
		});

		css = css.join(";");
		css = `${css};`;

		setState({ css });
	}

	render() {
		return null;
	}
}

export default withState({ css: "", selector: "" })(Style);
// export default withSelect((select, { id, is_single, parent_style }) => {
// 	const { getTypography, getSingle } = select(pr_store);
// 	const typography = is_single ? getSingle() : getTypography(id);
// 	const { selector_groups, is_visible } = typography;
// 	let style;
// 	style = pickBy(typography, prop => {
// 		if (prop === "font_family" && typography.custom_font) {
// 			return true;
// 		}

// 		if (`custom_${prop}`) {
// 			return true;
// 		}

// 		return false;
// 	});
// 	style = parent_style ? { ...parent_style, ...style } : style;

// 	return { style, selector_groups, is_visible };
// })(Style);
