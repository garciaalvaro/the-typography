import l from "src/js/both/utils";
import Title from "./Title";
import Typography from "./Typography";
import ParentSelector from "./ParentSelector";
import ForceStyles from "./ForceStyles";
import Selectors from "./Selectors";
import SelectorsPreviewPredefined from "./SelectorsPreviewPredefined";
import ButtonResetDefaults from "../ButtonResetDefaults";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
	is_open: boolean;
}
type Props = Parent;

const { Fragment } = wp.element;

const SelectorGroupEdit: React.ComponentType<Props> = props => {
	const { _id, id, _typography_style_defaults } = props;
	const is_predefined = _id !== "";

	return (
		<Fragment>
			{is_predefined && (
				<ButtonResetDefaults
					_typography_style_defaults={_typography_style_defaults}
					selector_group_id={id}
				/>
			)}
			{!is_predefined && <Title {...props} />}
			<Typography {...props} />
			<ForceStyles {...props} />
			{is_predefined ? (
				<Fragment>
					<Selectors {...props} />
					<SelectorsPreviewPredefined {...props} is_edit={true} />
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
