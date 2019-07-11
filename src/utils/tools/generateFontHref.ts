export const generateFontHref = (fonts_to_load: FontToLoad[]) => {
	const srcs = fonts_to_load.reduce<string[]>(
		(srcs, { family, variants_to_load }) => [
			...srcs,
			`${family.replace(/_/g, "+")}:${variants_to_load.join(",")}`
		],
		[]
	);

	return `https://fonts.googleapis.com/css?family=${srcs.join("|")}`;
};
