const { compact } = lodash;

const generateClassName = classes => {
	return compact(classes).join(" ");
};

export default generateClassName;
