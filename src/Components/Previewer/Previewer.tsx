import { useHandlePreviewerPageData } from "hooks";
import { Styles } from "./Styles";

export const Previewer: React.ComponentType = () => {
	useHandlePreviewerPageData();

	return <Styles />;
};
