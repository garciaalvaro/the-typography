// https://stackoverflow.com/a/661757 | CC BY-SA 3.0
const toFixed = (value: number, precision: number): number => {
	const power = Math.pow(10, precision || 0);
	return Math.round(value * power) / power;
};

export default toFixed;
