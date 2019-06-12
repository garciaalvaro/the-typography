import l, { Div, withAddTypography, addPrefix } from "utils";

interface Parent {
	has_predefined: boolean;
	typographies: State["typographies"];
	is_loading: State["is_loading"];
	is_last_page: State["is_last_page"];
}
interface withAddTypography {
	addTypography: FunctionVoid;
}
type Props = Parent & withAddTypography;

const { __ } = wp.i18n;
const { Button } = wp.components;
const { Fragment } = wp.element;
const { compose } = wp.compose;

const Message: React.ComponentType<Props> = props => {
	const { is_loading, is_last_page, addTypography, typographies } = props;

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

export default compose([withAddTypography])(Message);
