import l, { Div, Span, pr, icons, generateClassName } from "../index";
import withToggle from "./withToggle";

const { Button, Icon } = wp.components;
const { compose } = wp.compose;

const withPanel = ({ id, label }) =>
	compose([
		withToggle,
		WrappedComponent => props => {
			const { is_open, toggle } = props;
			const classes = generateClassName([
				`${pr}-panel`,
				is_open ? `${pr}-panel-is_open` : `${pr}-panel-is_closed`
			]);

			return (
				<Div id={`${pr}-${id}`} className={classes}>
					<Button className={`${pr}-button-toggle_panel`} onClick={toggle}>
						<Span className={`${pr}-panel-label`}>{label}</Span>
						<Icon
							className={`${pr}-panel-button`}
							icon={is_open ? icons.collapse : icons.expand}
						/>
					</Button>
					{is_open && (
						<Div className={`${pr}-panel-content`}>
							<WrappedComponent {...props} />
						</Div>
					)}
				</Div>
			);
		}
	]);

export default withPanel;
