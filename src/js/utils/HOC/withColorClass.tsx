import l from "utils";
import tinycolor from "tinycolor2";

interface withState extends setState<withState> {
	color_class: null | string;
}

const { Component } = wp.element;
const { withState, compose } = wp.compose;

const withColorClass = <P extends Typography & withState>(
	WrappedComponent: React.ComponentType<P>
) =>
	class extends Component<P> {
		componentDidMount = () => {
			this.updateColorBg();
		};

		componentDidUpdate = (prev_props: P) => {
			if (
				prev_props.color !== this.props.color ||
				prev_props.custom_color !== this.props.custom_color
			) {
				this.updateColorBg();
			}
		};

		updateColorBg = () => {
			const { custom_color, color, setState } = this.props;

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
