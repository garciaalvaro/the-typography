import l, {
	Div,
	plugin_namespace,
	plugin_title,
	icons
} from "src/js/both/utils";
import Root from "../Components/Root/Root";

const { registerPlugin } = wp.plugins;
const { Fragment } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

const registerSidebar = () =>
	registerPlugin(plugin_namespace, {
		// @ts-ignore
		icon: <Div id="pinned-logo">{icons.logo}</Div>,
		render: () => (
			<Fragment>
				<PluginSidebar name={plugin_namespace} title={plugin_title}>
					<Root />
				</PluginSidebar>
				<PluginSidebarMoreMenuItem target={plugin_namespace}>
					{plugin_title}
				</PluginSidebarMoreMenuItem>
			</Fragment>
		)
	});

export default registerSidebar;
