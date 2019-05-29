const { isUndefined } = lodash;

const is_customizer = !isUndefined(wp.customize);
const is_editor = !is_customizer;

export { is_customizer, is_editor };
