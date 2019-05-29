import l, { Div, pr_store, withAddTypography, addPrefix } from "utils";
import Typography from "./Typography";
import ButtonLoadMore from "./ButtonLoadMore";

interface SelectProps {
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

const ViewIndex: React.ComponentType<Props> = props => {
	const { is_loading, is_last_page, typographies, addTypography } = props;

	const getTypographies = () => {
		if (!typographies.length) {
			return null;
		}

		return typographies.map(typography => (
			<Typography key={typography.id} {...typography} />
		));
	};

	const getButton = () => {
		if (is_loading || is_last_page || !typographies.length) {
			return null;
		}

		return <ButtonLoadMore />;
	};

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
			{getTypographies()}
			{getButton()}
			{getMessage()}
		</Div>
	);
};

export default compose([
	withSelect<SelectProps>(select => {
		const { getTypographies } = select<SelectorsR["getTypographies"]>(pr_store);
		const { isLoading } = select<SelectorsR["isLoading"]>(pr_store);
		const { isLastPage } = select<SelectorsR["isLastPage"]>(pr_store);
		const typographies = getTypographies();
		const is_loading = isLoading();
		const is_last_page = isLastPage();

		return { typographies, is_loading, is_last_page };
	}),
	withAddTypography
])(ViewIndex);
