import l, { pr_store } from "utils";
import Style from "./Style";

const { pickBy, isUndefined, difference } = lodash;
const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withSelect, withDispatch } = wp.data;

const prepareStyle = typography =>
	pickBy(typography, (value, key) => {
		if (key === "font_family" && typography.custom_font) {
			return true;
		}

		if (typography[`custom_${key}`]) {
			return true;
		}

		return false;
	});

class Styles extends Component {
	componentDidMount() {
		wp.customize.previewer.bind("ready", () => {
			this.props.setState({
				previewer_ready_counter: this.props.previewer_ready_counter + 1
			});
		});
	}

	componentDidUpdate(prev_props) {
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
	withSelect(select => {
		const { getTypographies, getSingle } = select(pr_store);
		const single = getSingle();
		let typographies = getTypographies();

		if (single.id === 0) {
			typographies = [...typographies, single];
		} else if (!isUndefined(single.id)) {
			typographies = typographies.map(typography => {
				if (typography.id === single.id) {
					return single;
				}

				return typography;
			});
		}

		typographies = typographies.filter(({ is_visible }) => is_visible);

		return { typographies };
	})
])(Styles);
