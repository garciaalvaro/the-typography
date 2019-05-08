import l, { Div, pr_store, withAddTypography, addPrefix } from "utils";
import Typography from "./Typography";
import ButtonLoadMore from "./ButtonLoadMore";

const { __ } = wp.i18n;
const { Button } = wp.components;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const { withSelect } = wp.data;

const ViewIndex = props => {
	const { is_loading, is_last_page, typographies, addTypography } = props;

	const getTypographies = () => {
		if (typographies.length === 0) {
			return null;
		}

		return typographies.map(typography => (
			<Typography key={typography.id} {...typography} />
		));
	};

	const getButton = () => {
		if (is_loading || is_last_page || typographies.length === 0) {
			return null;
		}

		return <ButtonLoadMore />;
	};

	const getMessage = () => {
		if (is_loading) {
			return <Div id="index-message">{__("Loading typographies...")}</Div>;
		}

		if (!is_loading && is_last_page && typographies.length === 0) {
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
	withSelect(select => {
		const { getTypographies, isLoading, isLastPage } = select(pr_store);
		const typographies = getTypographies();
		const is_loading = isLoading();
		const is_last_page = isLastPage();

		return { typographies, is_loading, is_last_page };
	}),
	withAddTypography
])(ViewIndex);
