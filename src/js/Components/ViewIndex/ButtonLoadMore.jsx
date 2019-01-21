import l, { withFetchTypographies, pr } from "../../utils";

const { __ } = wp.i18n;
const { Button } = wp.components;

const ButtonLoadMore = props => {
	const { fetchTypographies } = props;

	return (
		<Button
			onClick={fetchTypographies}
			id={`${pr}-button-load_more`}
			className={`${pr}-dark`}
		>
			{__("Load more")}
		</Button>
	);
};

export default withFetchTypographies(ButtonLoadMore);
