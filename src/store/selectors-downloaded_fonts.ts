import { sortBy } from "lodash";

export const selectors_downloaded_fonts: SelectorsDownloadedFonts = {
	getDownloadedFonts: state => {
		const { downloaded_fonts, typographies } = state;
		const fonts: DownloadedFont[] = [];

		typographies.forEach(({ font_family }) => {
			if (!font_family) {
				return;
			}

			const font = fonts.find(font => font.value === font_family);

			if (!font) {
				fonts.push({
					value: font_family,
					label: font_family.replace(/_/g, " "),
					is_downloaded: !!downloaded_fonts.find(
						({ value }) => value === font_family
					)
				});
			}
		});

		downloaded_fonts.forEach(({ value }) => {
			const font = fonts.find(font => font.value === value);

			if (!font) {
				fonts.push({
					value,
					label: value.replace(/_/g, " "),
					is_downloaded: true
				});
			}
		});

		return sortBy(fonts, "value");
	}
};
