import l, { Div, pr_store } from "src/js/both/utils";
import Message from "./Message";
import Typography from "./Typography/Typography";
import ButtonLoadMore from "./ButtonLoadMore";
import Tabs from "./Tabs";

interface withSelect {
	typographies: State["typographies"];
	is_loading: State["is_loading"];
	is_last_page: State["is_last_page"];
	tab_open: State["tab_open"];
}
type Props = withSelect;

const { withSelect } = wp.data;

const ViewIndex: React.ComponentType<Props> = props => {
	const { is_loading, is_last_page, typographies, tab_open } = props;
	const typographies_custom = typographies.filter(
		({ _namespace }) => _namespace === ""
	);
	const typographies_predefined = typographies.filter(
		({ _namespace }) => _namespace !== ""
	);

	return (
		<Div id="index">
			{!!typographies_predefined.length && <Tabs tab_open={tab_open} />}
			{tab_open === "custom"
				? typographies_custom.map(typography => (
						<Typography key={typography.id} {...typography} />
				  ))
				: typographies_predefined.map(typography => (
						<Typography key={typography.id} {...typography} />
				  ))}
			{!is_loading && !is_last_page && typographies.length && (
				<ButtonLoadMore />
			)}
			<Message
				typographies_custom={typographies_custom}
				is_loading={is_loading}
				is_last_page={is_last_page}
			/>
		</Div>
	);
};

export default withSelect<withSelect>(select => {
	const { getTabOpen } = select<SelectorsR["getTabOpen"]>(pr_store);
	const { getTypographies } = select<SelectorsR["getTypographies"]>(pr_store);
	const { isLoading } = select<SelectorsR["isLoading"]>(pr_store);
	const { isLastPage } = select<SelectorsR["isLastPage"]>(pr_store);
	const is_loading = isLoading();
	const is_last_page = isLastPage();
	const typographies = getTypographies();

	return {
		typographies,
		is_loading,
		is_last_page,
		tab_open: getTabOpen()
	};
})(ViewIndex);
