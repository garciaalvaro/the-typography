import l, { Div, pr_store, withColorClass } from "utils";
import Title from "./Title";
import Info from "./Info";

const { compose } = wp.compose;
const { Component } = wp.element;
const { withDispatch } = wp.data;

class Typography extends Component {
	componentDidMount = () => {
		const { custom_font, font_family, font_variant, updateGFont } = this.props;

		if (custom_font && font_family !== "") {
			updateGFont(font_family, font_variant);
		}
	};

	render() {
		const { color_class } = this.props;

		return (
			<Div classes={["index-typography", color_class]}>
				<Info {...props} />
				<Title {...props} />
			</Div>
		);
	}
}

export default compose([
	withColorClass,
	withDispatch((dispatch, typography) => {
		const { updateGFont, loadSingle, goToSingle } = dispatch(pr_store);

		return {
			updateGFont,
			openSingle: () => {
				loadSingle(typography);
				goToSingle();
			}
		};
	})
])(Typography);
