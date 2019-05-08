import l, { is_customizer, Div, Span, pr_store, getNames, icons } from "utils";
import ButtonRemove from "./ButtonRemove";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Icon } = wp.components;
const { withSelect } = wp.data;

const Info = props => {
	const { context_type, context_post_type, taxonomies, is_visible } = props;

	const getTaxonomyInfo = () => {
		if (context_type === "all_site") {
			return __("All site");
		}
		if (context_type === "front_page") {
			return __("Front page");
		}
		if (context_type === "404_page") {
			return __("404 page");
		}

		if (context_type === "post_type") {
			const title = __("Post type: ");
			const post_types = getNames(
				taxonomies.context_post_type,
				context_post_type
			).join(", ");

			return `${title}${post_types}`;
		}

		return null;
	};

	return (
		<Div classes="index-typography-info">
			{is_customizer && (
				<Fragment>
					<Div
						classes={[
							"visibility-icon",
							"index-typography-visibility-icon",
							is_visible ? "is_visible" : "no-is_visible"
						]}
					>
						<Icon icon={icons.preview} />
					</Div>
					<Div
						classes={[
							"visibility-message",
							"index-typography-visibility-message"
						]}
					>
						{is_visible
							? __("Active in the current preview window")
							: __(
									`Not active in the current preview window (the "context" is different)`
							  )}
					</Div>
				</Fragment>
			)}
			<Span>{getTaxonomyInfo()}</Span>
			<ButtonRemove id={props.id} />
		</Div>
	);
};

export default withSelect(select => {
	const { getTaxonomies } = select(pr_store);

	return {
		taxonomies: getTaxonomies()
	};
})(Info);
