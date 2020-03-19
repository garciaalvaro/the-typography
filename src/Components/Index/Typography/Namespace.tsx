import "./Namespace.styl";
import { Div, Span } from "utils/Components";

type Props = {
	_namespace_title: Typography["_namespace_title"];
};

export const Namespace: React.ComponentType<Props> = props => {
	const { _namespace_title } = props;

	return (
		<Div className="typography-info-namespace">
			<Span>{_namespace_title}</Span>
		</Div>
	);
};
