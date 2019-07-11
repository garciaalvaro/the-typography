import { applyFilters } from "@wordpress/hooks";

import "./Typography.styl";
import { TypographyVisibility } from "../../TypographyVisibility/TypographyVisibility";
import { is_customizer } from "utils/data";
import { Div } from "utils/Components";
import { Title } from "./Title";
import { Info } from "./Info";
import { ButtonRemove } from "./ButtonRemove";
import { useColorScheme, useIsPredefined } from "hooks";

const ButtonActivate = applyFilters<React.ComponentType>(
	"the_typography.Component.ButtonActivate",
	() => null
);

export const Typography: React.ComponentType<Typography> = props => {
	const { id, title, is_active, is_visible } = props;
	const is_predefined = useIsPredefined(id);
	const color_scheme = useColorScheme(id);

	return (
		<Div
			className={[
				"typography",
				`color_scheme-type-${color_scheme}`,
				is_predefined && !is_active ? "no-is_active" : null
			]}
		>
			<Info {...props} />

			<Title id={id} title={title} />

			{is_customizer && (
				<TypographyVisibility is_visible={is_visible} is_active={is_active} />
			)}

			{/*
			// @ts-ignore */}
			{is_predefined && <ButtonActivate id={id} is_active={is_active} />}

			{!is_predefined && <ButtonRemove id={id} />}
		</Div>
	);
};
