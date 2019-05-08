import l, { is_customizer, withColorClass, Div, pr_store, icons } from "utils";
import SelectorGroups from "./SelectorGroups";
import Title from "./Title";
import Context from "./Context";
import Typography from "./Typography";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Icon } = wp.components;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

const ViewSingle = props => {
	const { color_class, is_visible } = props;

	return (
		<Div id="single" classes={color_class}>
			{is_customizer && (
				<Fragment>
					<Div
						classes={[
							"visibility-icon",
							"single-visibility-icon",
							is_visible ? "is_visible" : "no-is_visible"
						]}
					>
						<Icon icon={icons.preview} />
					</Div>
					<Div classes={["visibility-message", "single-visibility-message"]}>
						{is_visible
							? __("Active in the current preview window")
							: __(
									`Not active in the current preview window (the "context" is different)`
							  )}
					</Div>
				</Fragment>
			)}
			<Title {...props} />
			<Context {...props} />
			<Typography {...props} />
			<SelectorGroups {...props} />
		</Div>
	);
};

export default compose([
	withSelect(select => {
		const { getSingle } = select(pr_store);
		const typography = getSingle();

		return { ...typography };
	}),
	withDispatch((dispatch, props, { select }) => {
		const { updateProp, updateChanged, updateSingleVisibility } = dispatch(
			pr_store
		);
		const { getPreviewerData } = select(pr_store);
		const previewer_data = getPreviewerData();

		return {
			updateProp: (prop, value) => {
				updateProp(prop, value);
				updateChanged(true);

				if (
					prop === "context_type" ||
					prop === "context_post_type" ||
					prop === "context_post_type_template"
				) {
					updateSingleVisibility(previewer_data);
				}
			}
		};
	}),
	withColorClass
])(ViewSingle);
