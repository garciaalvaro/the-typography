declare interface withToggle {
	is_open: boolean;
	toggle: FunctionVoid;
	open: FunctionVoid;
	close: FunctionVoid;
}

declare interface withAddTypography {
	addTypography: FunctionVoid;
}

declare interface withColorClass {
	color_class: null | string;
}

declare interface withTypographyStyle {
	typography_style: Partial<TypographyStyleCamelCase>;
}
