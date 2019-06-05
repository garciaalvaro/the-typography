import l, { Span, Div, pr_store, withColorClass } from "utils";
import Title from "./Title";
import Info from "./Info";

interface withDispatch {
	addGFont: FunctionVoid;
	openSingle: FunctionVoid;
}
type Parent = Typography;

type Props = withDispatch & withColorClass & Parent;

const { compose } = wp.compose;
const { Component } = wp.element;
const { withDispatch } = wp.data;

class TypographyComp extends Component<Props> {
	componentDidMount = () => {
		const { id, custom_font, font_family, font_variant, addGFont } = this.props;

		if (custom_font && font_family !== "") {
			addGFont(id, font_family, font_variant);
		}
	};

	render() {
		const { props } = this;
		const { color_class, namespace_title } = props;

		return (
			<Div classes={["index-typography", color_class]}>
				<Info {...props} />
				<Title {...props} />
				{namespace_title && (
					<Div classes={["namespace-info", "index-typography-info"]}>
						<Span>{namespace_title}</Span>
					</Div>
				)}
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
])(TypographyComp);
