import l from "utils";
import SelectorsPreviewPredefined from "./SelectorsPreviewPredefined";
import SelectorsPreview from "./SelectorsPreview";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
	is_predefined: boolean;
}
type Props = Parent & withToggle;

const SelectorGroupPreview: React.ComponentType<Props> = props => {
	if (props.is_predefined) {
		return <SelectorsPreviewPredefined {...props} is_edit={false} />;
	}

	return <SelectorsPreview {...props} />;
};

export default SelectorGroupPreview;
