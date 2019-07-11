import { useHandlePreviewerPageData } from "hooks";
import { Styles } from "./Styles";

export const Previewer: React.ComponentType = props => {
	useHandlePreviewerPageData();

	return <Styles />;
};
