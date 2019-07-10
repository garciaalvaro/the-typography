import l, { withPanel } from "src/js/both/utils";
import ContextType from "./Context/ContextType";
import PostType from "./Context/PostType";
import PostTypeTemplate from "./Context/PostTypeTemplate";

interface Parent extends Typography {
	updateProp: FunctionVoid;
}
type Props = Parent;

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Context: React.ComponentType<Props> = props => {
	return (
		<Fragment>
			<ContextType {...props} />
			{props.context_type === "post_type" && (
				<Fragment>
					<PostType {...props} />
					<PostTypeTemplate {...props} />
				</Fragment>
			)}
		</Fragment>
	);
};

export default withPanel({ id: "context", label: __("Context") })(Context);
