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
	const { _id, id, typography_style_defaults } = props;
	const is_predefined = _id !== "";

	return (
		<Fragment>
			{is_predefined && (
				<ButtonResetDefaults
					typography_style_defaults={typography_style_defaults}
					selector_group_id={id}
				/>
			)}
			{!is_predefined && <Title {...props} />}
			<Typography {...props} />
			<ForceStyles {...props} />
			{is_predefined ? (
				<Fragment>
					<Selectors {...props} />
					<SelectorsPreview {...props} is_edit={true} />
				</Fragment>
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
