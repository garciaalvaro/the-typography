const { isUndefined } = lodash;

const is_customizer = !isUndefined(wp.customize);

export default is_customizer;
