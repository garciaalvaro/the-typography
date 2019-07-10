import l, { Div, Span, addPrefix, icons } from "src/js/both/utils";
import withToggle from "./withToggle";

interface withPanel {
	id: string;
	label: string;
}
type Props = withToggle & withPanel;

const { Button, Icon } = wp.components;
const { compose } = wp.compose;

const withPanel = ({ id, label }: withPanel) =>
	compose([
		withToggle,
		<P extends Props>(
			WrappedComponent: React.ComponentType<P>
		): React.ComponentType<P> => props => {
			const { is_open, toggle } = props;

			return (
				<Div
					id={id}
					classes={["panel", is_open ? "panel-is_open" : "panel-is_closed"]}
				>
					<Button className={addPrefix("button-toggle_panel")} onClick={toggle}>
						<Span classes="panel-label">{label}</Span>
						<Icon
							className={addPrefix("panel-button")}
							icon={is_open ? icons.collapse : icons.expand}
						/>
					</Button>
					{is_open && (
						<Div classes="panel-content">
							<WrappedComponent {...props} />
						</Div>
					)}
				</Div>
			);
		}
	]);

export default withPanel;
