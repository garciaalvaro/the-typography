import l, { pr } from ".";

const { isUndefined, isString, compact } = lodash;

const addPrefix = items => {
	if (isUndefined(items)) {
		return null;
	}

	if (isString(items)) {
		return `${pr}-${items}`;
	}

	items = compact(items);
	items = items.map(item => {
		if (item.startsWith("#")) {
			return item.replace("#", "");
		}

		return `${pr}-${item}`;
	});
	items = items.join(" ");

	return items;
};

export default addPrefix;
