declare interface setState<P> {
	setState: (props: Partial<P>) => void;
}

declare interface withColorClass {
	color_class: string | null;
}

declare interface Object {
	[key: string]: any;
}

type FunctionVoid = (...args: any) => void;

type HOC<Props> = (
	component: React.ComponentType
) => React.ComponentType<Props>;

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
