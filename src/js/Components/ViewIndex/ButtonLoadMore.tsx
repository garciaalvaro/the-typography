import l, { withFetchTypographies, addPrefix } from "utils";

interface withDispatch {
	fetchTypographies: FunctionVoid;
}
type Props = withDispatch;

const { __ } = wp.i18n;
const { Button } = wp.components;

const ButtonLoadMore: React.ComponentType<Props> = props => {
	const { fetchTypographies } = props;

	return (
		<Button
			onClick={fetchTypographies}
			id={addPrefix("button-load_more")}
			className={addPrefix("dark")}
		>
			{__("Load more")}
		</Button>
	);
};

export default withFetchTypographies(ButtonLoadMore);
