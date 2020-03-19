import "./Panel.styl";
import { Button } from "utils/Components/Button";
import { Div } from "utils/Components/Div";
import { Icon } from "utils/Components/Icon";
import { Span } from "utils/Components/Span";
import { useToggle } from "utils/hooks/useToggle";

type Props = {
	id: string;
	label: string;
	children: React.ReactNode;
};

export const Panel: React.ComponentType<Props> = props => {
	const { id, label, children } = props;
	const { toggle, is_open } = useToggle();

	return (
		<Div id={id} className={["panel", is_open ? "is_open" : "is_closed"]}>
			<Button
				className={["button-toggle_panel", "button-icon"]}
				onClick={toggle}
			>
				<Span className="panel-label">{label}</Span>

				<Icon icon={is_open ? "collapse" : "expand"} />
			</Button>

			{is_open && children}
		</Div>
	);
};
