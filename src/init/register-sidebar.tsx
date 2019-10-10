import { registerPlugin } from "@wordpress/plugins";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { Fragment } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { plugin_namespace, plugin_title } from "utils/data";
import { Icon } from "utils/Components";
import { App } from "Components/App/App";
import { UpdateWP } from "Components/UpdateWP/UpdateWP";

registerPlugin(plugin_namespace, {
	// @ts-ignore
	icon: <Icon icon="logo" />,
	render: () => (
		<Fragment>
			<PluginSidebar name={plugin_namespace} title={plugin_title}>
				{useSelect ? <App /> : <UpdateWP />}
			</PluginSidebar>
			<PluginSidebarMoreMenuItem target={plugin_namespace}>
				{plugin_title}
			</PluginSidebarMoreMenuItem>
		</Fragment>
	)
});
