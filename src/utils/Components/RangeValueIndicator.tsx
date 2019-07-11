import { Span } from "utils/Components/Span";

interface Props {
	value: number;
	unit?: string;
}

export const RangeValueIndicator: React.ComponentType<Props> = props => {
	const { value, unit } = props;

	return (
		<Span className="range-value-indicator">{value + (unit ? unit : "")}</Span>
	);
};
