import "./Info.styl";
import { Div } from "utils/Components";
import { is_pro } from "utils/data";
import { Context } from "./Context";
import { Namespace } from "./Namespace";

export const Info: React.ComponentType<Typography> = props => {
	const { _namespace_title, context_type, context_post_type } = props;

	return (
		<Div className="typography-info">
			<Context
				context_type={context_type}
				context_post_type={context_post_type}
			/>

			{is_pro && _namespace_title && (
				<Namespace _namespace_title={_namespace_title} />
			)}
		</Div>
	);
};
