import { prepareTypography } from "utils/tools/prepareTypography";

export const prepareTypographies = (
	typographies_raw: TypographyRaw[],
	taxonomies: Taxonomies
): Typography[] =>
	typographies_raw.map(typography_raw =>
		prepareTypography(typography_raw, taxonomies)
	);
