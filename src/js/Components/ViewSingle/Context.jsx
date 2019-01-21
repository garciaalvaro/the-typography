import l, { withPanel } from "../../utils";
import ContextType from "./Context/ContextType";
import PostType from "./Context/PostType";
import PostTypeTemplate from "./Context/PostTypeTemplate";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

const Context = props => {
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
