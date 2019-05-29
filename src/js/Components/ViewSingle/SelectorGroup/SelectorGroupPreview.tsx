import l from "utils";
import SelectorsPreview from "./SelectorsPreview";

interface Parent extends SelectorGroup {
	updateProp: FunctionVoid;
	new_selector_added: boolean;
}
type Props = Parent & withToggle;

const SelectorGroupPreview: React.ComponentType<Props> = props => {
	return <SelectorsPreview {...props} />;
};

export default SelectorGroupPreview;
