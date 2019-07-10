import l, { Div, Span, plugin_info } from "src/js/both/utils";

type Props = {};

const ViewInfo: React.ComponentType<Props> = props => {
	return (
		<Div id="info">
			<Span>{plugin_info}</Span>
		</Div>
	);
};

export default ViewInfo;
