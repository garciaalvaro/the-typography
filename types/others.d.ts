type ComponentProps = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
};

type BlockTypeDataElementRaw = {
	name: string;
	selector: string;
};

type BlockTypeDataElement = BlockTypeDataElementRaw & {
	id: string;
};

type BlockTypeData = {
	name: string;
	elements: BlockTypeDataElementRaw[];
};
