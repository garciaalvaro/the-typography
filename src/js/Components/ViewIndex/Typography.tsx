import l, { Div, pr_store, withColorClass } from "utils";
import Title from "./Title";
import Info from "./Info";

const { compose } = wp.compose;
const { Component } = wp.element;
const { withDispatch } = wp.data;

class Typography extends Component {
	componentDidMount = () => {
		const { id, custom_font, font_family, font_variant, addGFont } = this.props;

		if (custom_font && font_family !== "") {
			addGFont(id, font_family, font_variant);
		}
	};

	render() {
		const { props } = this;
		const { color_class } = props;

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
		const { addGFont, loadSingle, goToSingle } = dispatch(pr_store);

		return {
			addGFont,
			openSingle: () => {
				loadSingle(typography);
				goToSingle();
			}
		};
	})
])(Typography);
