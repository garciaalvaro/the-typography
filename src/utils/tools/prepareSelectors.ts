import uuid from "uuid/v4";
import { assign, pick, keys, startCase } from "lodash";
import { __ } from "@wordpress/i18n";

import { generateDefaultSelector } from "utils/data/defaults";

const selector_default = generateDefaultSelector();

export const prepareSelectors = (selectors_raw: SelectorRaw[]): Selector[] =>
	selectors_raw.map(selector_raw => {
		const selector = assign(
			{},
			selector_default,
			pick(selector_raw, keys(selector_default))
		);
		let { block_name, block_title } = selector;

		if (block_name) {
			block_title = block_title || startCase(block_name);
		}

		return {
			...selector,
			block_title,
			id: uuid()
		};
	});
