declare interface Object {
	[key: string]: any;
}

declare interface GutenbergBlock {
	attributes: Object;
	clientId: string;
	innerBlocks: GutenbergBlock[];
	isValid: boolean;
	name: string;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
