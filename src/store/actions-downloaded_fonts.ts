export const actions_downloaded_fonts: ActionCreatorsDownloadedFonts = {
	setDownloadedFonts: payload => ({
		type: "SET_DOWNLOADED_FONTS",
		payload
	}),
	addDownloadedFont: payload => ({
		type: "ADD_DOWNLOADED_FONT",
		payload
	}),
	removeDownloadedFont: payload => ({
		type: "REMOVE_DOWNLOADED_FONT",
		payload
	})
};
