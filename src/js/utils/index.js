import l from "./log";
import blocks_core from "./data-blocks-core";
import blocks_others from "./data-blocks-others";
const blocks_data = [...blocks_core, ...blocks_others];
import is_customizer from "./is_customizer";
import icons from "./icons";
import toFixed from "./toFixed";
import {
	selector_defaults,
	selector_group_defaults,
	typography_defaults
} from "./data-defaults";
import generateStyle from "./generateStyle";
import generateClassName from "./generateClassName";
import {
	cleanTaxonomy,
	cleanTaxonomyTerm,
	getId,
	getIds,
	getSlug,
	getSlugs,
	getName,
	getNames
} from "./utils-taxonomies";
import { cleanTypography, cleanTypographies } from "./utils-typographies";
import fonts from "./data-googlefonts-fonts";
import fonts_family from "./data-googlefonts-families";
import fonts_variants from "./data-googlefonts-variants";
import {
	withAddTypography,
	withColorClass,
	withContainer,
	withControlCustom,
	withFetchTypographies,
	withFixedHeight,
	withPanel,
	withToggle,
	withTypographyStyle
} from "./HOC";
import { DivForwardRef, Div, Span } from "./Components";
import {
	plugin_title,
	plugin_namespace,
	pr,
	pr_store,
	typographies_per_page
} from "./data-plugin";

export default l;
export {
	is_customizer,
	generateStyle,
	toFixed,
	generateClassName,
	blocks_data,
	withAddTypography,
	withColorClass,
	withContainer,
	withControlCustom,
	withFetchTypographies,
	withFixedHeight,
	withPanel,
	withToggle,
	withTypographyStyle,
	icons,
	selector_defaults,
	selector_group_defaults,
	typography_defaults,
	cleanTypography,
	cleanTypographies,
	cleanTaxonomy,
	cleanTaxonomyTerm,
	getId,
	getIds,
	getSlug,
	getSlugs,
	getName,
	getNames,
	fonts,
	fonts_family,
	fonts_variants,
	plugin_title,
	plugin_namespace,
	pr,
	pr_store,
	typographies_per_page,
	DivForwardRef,
	Div,
	Span
};
