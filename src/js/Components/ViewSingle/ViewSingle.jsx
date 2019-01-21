import l, {
	is_customizer,
	withColorClass,
	Div,
	pr,
	pr_store,
	generateClassName,
	icons
} from "../../utils";
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
		<Div
			id={`${pr}-single`}
			className={generateClassName([
				color_class ? `${pr}-${color_class}` : null
			])}
		>
			{is_customizer && (
				<Fragment>
					<Div
						className={generateClassName([
							`${pr}-visibility-icon`,
							`${pr}-single-visibility-icon`,
							is_visible ? `${pr}-is_visible` : `${pr}-no-is_visible`
						])}
					>
						<Icon icon={icons.preview} />
					</Div>
					<Div
						className={generateClassName([
							`${pr}-visibility-message`,
							`${pr}-single-visibility-message`
						])}
					>
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
