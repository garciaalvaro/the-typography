import l, { pr_store } from "utils";
import Style from "./Style";

const { defaults, pickBy, isEqual, isUndefined } = lodash;
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

class Previewer extends Component {
	// componentDidMount() {
	// 	const { typographies, setState } = this.props;

	// 	const styles = typographies.map(id => ({ id, css: "" }));

	// 	setState({ styles });
	// }

	// shouldComponentUpdate(next_props) {
	// 	const { typographies } = this.props;

	// 	if (isEqual(typographies, next_props.typographies)) {
	// 		return false;
	// 	}

	// 	return true;
	// }

	// componentDidUpdate(prev_props) {
	// 	const { typographies, styles, setState } = this.props;

	// 	if (typographies.length > prev_props.typographies.length) {
	// 		const typographies_new = typographies.filter(
	// 			id =>
	// 				!prev_props.typographies.find(typography_id => typography_id === id)
	// 		);
	// 		const styles_new = typographies_new.map(id => ({ id, css: "" }));

	// 		setState({ styles: [...styles, ...styles_new] });
	// 	} else if (typographies.length < prev_props.typographies.length) {
	// 		const styles_new = styles.filter(({ id }) =>
	// 			typographies.find(typography_id => typography_id === id)
	// 		);

	// 		setState({ styles: styles_new });
	// 	} else {
	// 		l(styles);
	// 	}
	// }

	render() {
		const { typographies, setState, styles, single } = this.props;
		// const updateStyle = (id, css) => {
		// 	setState({
		// 		styles: styles.map(style => {
		// 			if (id === style.id) {
		// 				return { id, css };
		// 			}

		// 			return style;
		// 		})
		// 	});
		// };

		return typographies.map(typography => {
			const { selector_groups } = typography;
			const parent_style = prepareStyle(typography);

			return selector_groups.map(typography => {
				const { id, selectors } = typography;
				let style;
				style = typography.custom_typography ? prepareStyle(typography) : {};
				style = { ...parent_style, ...style };

				return <Style key={id} id={id} selectors={selectors} style={style} />;
			});
		});

		return typographies.map(typography => {
			typography = pickBy(typography, prop => {
				if (prop === "font_family" && typography.custom_font) {
					return true;
				}

				if (`custom_${prop}`) {
					return true;
				}

				return false;
			});
			typography = defaults(typography, {
				font_family: null,
				color: null,
				font_size: null,
				line_height: null,
				letter_spacing: null,
				font_style: null,
				font_weight: null,
				text_transform: null,
				text_decoration: null
			});

			return (
				<Style
					key={typography.id}
					{...typography}
					updateStyle={css => updateStyle(typography.id, css)}
				/>
			);
		});
	}
}

export default compose([
	// withState({ styles: [] }),
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
])(Previewer);
