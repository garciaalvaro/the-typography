import l, { pr_store } from "utils";
import Style from "./Style";

interface withState extends setState<withState> {
	previewer_ready_counter: number;
}
interface withSelect {
	typographies: Typography[];
}
type Props = withState & withSelect;

const { pickBy, isUndefined, difference } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

const prepareStyle = <P extends Object>(typography: P) =>
	pickBy(typography, (value, key) => {
		if (
			(key === "font_family" && typography.custom_font) ||
			(key === "font_size" && typography.custom_font_size) ||
			(key === "line_height" && typography.custom_line_height) ||
			(key === "letter_spacing" && typography.custom_letter_spacing) ||
			(key === "color" && typography.custom_color) ||
			(key === "font_weight" && typography.custom_font_weight) ||
			(key === "font_style" && typography.custom_font_style) ||
			(key === "text_transform" && typography.custom_text_transform) ||
			(key === "text_decoration" && typography.custom_text_decoration)
		) {
			return true;
		}

		return false;
	});

class Styles extends Component<Props> {
	componentDidMount() {
		wp.customize.previewer.bind("ready", () => {
			this.props.setState({
				previewer_ready_counter: this.props.previewer_ready_counter + 1
			});
		});
	}

	componentDidUpdate(prev_props: Props) {
		const { typographies } = this.props;

		if (typographies.length < prev_props.typographies.length) {
			const ids = typographies.map(({ id }) => id);
			const ids_prev = prev_props.typographies.map(({ id }) => id);
			const ids_removed = difference(ids_prev, ids);

			wp.customize.previewer.send("thet-remove_style", ids_removed);
		}
	}

	render() {
		const { typographies, previewer_ready_counter } = this.props;

		return typographies.map(typography => {
			const { selector_groups } = typography;
			const parent_style = prepareStyle(typography);

			return selector_groups.map(group => {
				const {
					id,
					selectors,
					parent_selector,
					custom_parent_selector,
					force_styles
				} = group;
				let style;
				style = group.custom_typography ? prepareStyle(group) : {};
				style = { ...parent_style, ...style };

				return (
					<Style
						key={id}
						id={id}
						typography_id={typography.id}
						selectors={selectors}
						style={style}
						parent_selector={custom_parent_selector ? parent_selector : ""}
						force_styles={force_styles}
						previewer_ready_counter={previewer_ready_counter}
					/>
				);
			});
		});
	}
}

export default compose([
	withState({ previewer_ready_counter: 0 }),
	withSelect<withSelect>(select => {
		const { getTypographies } = select<SelectorsR["getTypographies"]>(pr_store);
		const { getSingle } = select<SelectorsR["getSingle"]>(pr_store);
		const single = getSingle();
		let typographies = getTypographies(true);

		if (single) {
			if (single.id === 0) {
				typographies = [single, ...typographies];
			} else if (!isUndefined(single.id)) {
				typographies = typographies.map(typography => {
					if (typography.id === single.id) {
						return single;
					}

					return typography;
				});
			}
		}

		typographies = typographies.filter(
			({ is_visible, is_active }) => is_visible && is_active
		);

		return { typographies };
	})
])(Styles);
