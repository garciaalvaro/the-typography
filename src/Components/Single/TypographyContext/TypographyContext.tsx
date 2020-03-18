import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { store_slug } from "utils/data";
import { Panel } from "utils/Components";
import { ContextType } from "./ContextType";
import { PostType } from "./PostType";
import { PostTypeTemplate } from "./PostTypeTemplate";

type useSelectProps = {
	_context_fixed: Typography["_context_fixed"];
	context_type: Typography["context_type"];
	context_post_type: Typography["context_post_type"];
	context_post_type_template: Typography["context_post_type_template"];
};

export const TypographyContext: React.ComponentType = () => {
	const {
		_context_fixed,
		context_type,
		context_post_type,
		context_post_type_template
	} = useSelect<useSelectProps>(select =>
		select(store_slug).getContextProps()
	);

	return (
		<Panel id="single-context" label={__("Context")}>
			<ContextType
				_context_fixed={_context_fixed}
				context_type={context_type}
			/>

			{context_type === "post_type" && (
				<Fragment>
					<PostType
						_context_fixed={_context_fixed}
						context_post_type={context_post_type}
					/>

					<PostTypeTemplate
						_context_fixed={_context_fixed}
						context_post_type_template={context_post_type_template}
					/>
				</Fragment>
			)}
		</Panel>
	);
};
