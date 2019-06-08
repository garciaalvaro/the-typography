import l, { Div, pr_store, withAddTypography, addPrefix } from "utils";
import Typography from "./Typography";
import ButtonLoadMore from "./ButtonLoadMore";

interface SelectProps {
	has_custom: boolean;
	typographies: State["typographies"];
	is_loading: State["is_loading"];
	is_last_page: State["is_last_page"];
}
interface HOCProps {
	addTypography: FunctionVoid;
}
type Props = SelectProps & HOCProps;

const { __ } = wp.i18n;
const { Button } = wp.components;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;
const Tabs = wp.hooks.applyFilters("thet.pro.Tabs", false);

const ViewIndex: React.ComponentType<Props> = props => {
	const {
		is_loading,
		is_last_page,
		addTypography,
		typographies,
		has_custom
	} = props;

	const getMessage = () => {
		if (is_loading) {
			return <Div id="index-message">{__("Loading typographies...")}</Div>;
		}

		if (!is_loading && is_last_page && !typographies.length) {
			return (
				<Fragment>
					<Div id="index-message">{__("No typographies found.")}</Div>
					<Button
						id={addPrefix("button-add_first_typography")}
						className={addPrefix("navigation-button")}
						onClick={addTypography}
					>
						{__("Add Typography")}
					</Button>
				</Fragment>
			);
		}

		return null;
	};

	return (
		<Div id="index">
			{has_custom && Tabs ? (
				<Tabs
					render={(tab_open: "custom" | "predefined") => {
						let typographies_filtered: Typography[];

						if (tab_open === "custom") {
							typographies_filtered = typographies.filter(
								({ _namespace }) => !_namespace
							);
						} else {
							typographies_filtered = typographies.filter(
								({ _namespace }) => _namespace
							);
						}

						return typographies_filtered.map(typography => (
							<Typography key={typography.id} {...typography} />
						));
					}}
				/>
			) : (
				typographies.map(typography => (
					<Typography key={typography.id} {...typography} />
				))
			)}
			{!is_loading && !is_last_page && typographies.length && (
				<ButtonLoadMore />
			)}
			{getMessage()}
		</Div>
	);
};

export default compose([
	withSelect<SelectProps>(select => {
		const { getTypographies } = select<SelectorsR["getTypographies"]>(pr_store);
		const { isLoading } = select<SelectorsR["isLoading"]>(pr_store);
		const { isLastPage } = select<SelectorsR["isLastPage"]>(pr_store);
		const is_loading = isLoading();
		const is_last_page = isLastPage();
		const typographies = getTypographies();
		const has_custom = !!typographies.filter(({ _namespace }) => _namespace)
			.length;

		return { typographies, has_custom, is_loading, is_last_page };
	}),
	withAddTypography
])(ViewIndex);
