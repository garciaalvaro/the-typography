import l from "src/js/both/utils";
import tinycolor from "tinycolor2";

interface withState extends setState<withState> {
	color_class: null | string;
}
interface Parent {
	custom_typography?: boolean;
	parent_typography?: TypographyStyleSelectorGroup;
}
type Props = Parent & Typography & withState;

const { Component } = wp.element;
const { withState, compose } = wp.compose;

const withColorClass = <P extends Props>(
	WrappedComponent: React.ComponentType<P>
) =>
	class extends Component<P> {
		componentDidMount = () => {
			const [color, custom_color] = this.getColorProps(this.props);

			this.updateColorBg(color, custom_color);
		};

		componentDidUpdate = (prev_props: P) => {
			const [prev_color, prev_custom_color] = this.getColorProps(prev_props);
			const [color, custom_color] = this.getColorProps(this.props);

			if (prev_color !== color || prev_custom_color !== custom_color) {
				this.updateColorBg(color, custom_color);
			}
		};

		getColorProps(
			props: P
		): [TypographyStyle["color"], TypographyStyle["custom_color"]] {
			const {
				custom_color,
				color,
				custom_typography,
				parent_typography
			} = props;

			if (parent_typography && !custom_typography) {
				return [parent_typography.color, parent_typography.custom_color];
			}

			return [color, custom_color];
		}

		updateColorBg = (
			color: TypographyStyle["color"],
			custom_color: TypographyStyle["custom_color"]
		) => {
			let { setState } = this.props;

			if (custom_color === false || color === "") {
				setState({ color_class: null });
			} else if (
				tinycolor.isReadable("#fff", color, {
					level: "AA",
					size: "large"
				})
			) {
				setState({ color_class: "light" });
			} else {
				setState({ color_class: "dark" });
			}
		};

		render() {
			return (
				<WrappedComponent
					color_class={this.props.color_class}
					{...this.props}
				/>
			);
		}
	};

export default compose([withState({ color_class: null }), withColorClass]);
