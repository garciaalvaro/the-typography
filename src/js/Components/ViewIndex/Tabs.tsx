import l, { Div, addPrefix, pr_store } from "utils";

interface withDispatch {
	toggleTabOpen: FunctionVoid;
}
interface Parent {
	tab_open: State["tab_open"];
}
type Props = withDispatch & Parent;

const { defaults, map } = lodash;
const { __ } = wp.i18n;
const { Button } = wp.components;
const { withDispatch } = wp.data;

let tabs: any;
tabs = defaults(
	{ custom: __("Custom"), predefined: __("Predefined") },
	wp.hooks.applyFilters("thet.pro.setTabNames", {})
);
tabs = map(tabs, (value, key) => ({ value: key, label: value }));

const Tabs: React.ComponentType<Props> = props => {
	const { tab_open, toggleTabOpen } = props;

	return (
		<Div id="tabs">
			{tabs.map(({ value, label }: any) => (
				<Button
					key={value}
					className={addPrefix([
						"tab-button",
						tab_open === value ? "is-active" : null
					])}
					onClick={toggleTabOpen}
				>
					{label}
				</Button>
			))}
		</Div>
	);
};

export default withDispatch<withDispatch, Parent>(dispatch => {
	const { toggleTabOpen } = dispatch(pr_store);

	return {
		toggleTabOpen
	};
})(Tabs);
