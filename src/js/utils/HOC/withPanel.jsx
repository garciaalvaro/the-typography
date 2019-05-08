import l, { Div, Span, addPrefix, icons } from "utils";
import withToggle from "./withToggle";

const { Button, Icon } = wp.components;
const { compose } = wp.compose;

const withPanel = ({ id, label }) =>
	compose([
		withToggle,
		WrappedComponent => props => {
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
