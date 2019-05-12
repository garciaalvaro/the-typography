import l from "utils";

const { map, pick, isEqual, compact, throttle } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;

class Style extends Component {
	componentWillUnmount = () => {
		this.sendStyle.cancel();
	};

	componentDidMount() {
		this.updateCss();
		this.updateSelector();
	}

	// Throttle the value change.
	sendStyle = throttle(
		() => {
			const { id, typography_id, selector, css } = this.props;

			wp.customize.previewer.send("thet-add_modify_style", {
				id,
				typography_id,
				selector,
				css
			});
		},
		300,
		{
			leading: true,
			trailing: true
		}
	);

	componentDidUpdate(prev_props) {
		const {
			style,
			css,
			selector,
			selectors,
			id,
			typography_id,
			parent_selector,
			force_styles,
			previewer_ready_counter
		} = this.props;

		if (
			!isEqual(style, prev_props.style) ||
			force_styles !== prev_props.force_styles
		) {
			this.updateCss();
		}

		if (
			!isEqual(selectors, prev_props.selectors) ||
			parent_selector !== prev_props.parent_selector
		) {
			this.updateSelector();
		}

		if (previewer_ready_counter > prev_props.previewer_ready_counter) {
			this.sendStyle();
		}

		if (
			previewer_ready_counter > 0 &&
			(!isEqual(css, prev_props.css) || !isEqual(selector, prev_props.selector))
		) {
			this.sendStyle();
		}
	}

	updateSelector() {
		const { setState, selectors, parent_selector } = this.props;
		let selector;
		selector = selectors.map(
			({
				selector_type,
				text_selector,
				block_selector_root,
				block_selector_extra
			}) => {
				let selector = parent_selector ? `${parent_selector} ` : "";

				if (selector_type === "text") {
					selector += text_selector;
				} else if (selector_type === "block") {
					selector +=
						block_selector_root +
						(block_selector_extra ? ` ${block_selector_extra}` : "");
				} else {
					return null;
				}

				return selector;
			}
		);
		selector = compact(selector);

		setState({ selector });
	}

	updateCss() {
		const { setState, style, force_styles } = this.props;

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
			prop_css += force_styles ? "!important" : "";

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
