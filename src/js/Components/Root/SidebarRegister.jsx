import l, { plugin_namespace, plugin_title } from "../../utils";
import Sidebar from "./Sidebar";

const { Fragment, Component } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

class SidebarRegister extends Component {
	render() {
		return (
			<Fragment>
				<PluginSidebar name={plugin_namespace} title={plugin_title}>
					<Sidebar />
				</PluginSidebar>
				<PluginSidebarMoreMenuItem target={plugin_namespace}>
					{plugin_title}
				</PluginSidebarMoreMenuItem>
			</Fragment>
		);
	}
}

export default SidebarRegister;
