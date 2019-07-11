import { isUndefined } from "lodash";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";

export const plugin_info = __("The Typography info");
export const plugin_title = __("The Typography");
export const plugin_namespace = "the-typography";
export const plugin_prefix = "thet";
export const store_slug = `melonpan/${plugin_namespace}`;
export const typographies_per_page = 99;
export const is_pro = applyFilters("the_typography.is_pro", false);
export const is_editor = isUndefined((window as any).wp.customize);
export const is_customizer = !is_editor;
