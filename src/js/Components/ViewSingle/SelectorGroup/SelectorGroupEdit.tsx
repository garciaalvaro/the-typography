import l from "utils";
import Title from "./Title";
import Typography from "./Typography";
import ParentSelector from "./ParentSelector";
import ForceStyles from "./ForceStyles";
import Selectors from "./Selectors";
import SelectorsPreview from "./SelectorsPreview";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
	is_open: boolean;
}
type Props = Parent;

const { Fragment } = wp.element;
const ButtonResetDefaults = wp.hooks.applyFilters(
	"thet.pro.ButtonResetDefaults",
	() => null
);

const SelectorGroupEdit: React.ComponentType<Props> = props => {
	const { fixed, typography_style_defaults, id } = props;

	return (
		<Fragment>
			{fixed && (
				<ButtonResetDefaults
					typography_style_defaults={typography_style_defaults}
					selector_group_id={id}
				/>
			)}
			{!fixed && <Title {...props} />}
			<Typography {...props} />
			<ForceStyles {...props} />
			{fixed ? (
				<SelectorsPreview {...props} />
			) : (
				<Fragment>
					<ParentSelector {...props} />
					<Selectors {...props} />
				</Fragment>
			)}
		</Fragment>
	);
};

export default SelectorGroupEdit;
