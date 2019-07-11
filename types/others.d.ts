interface ComponentProps extends Object {
	children?: React.ReactNode;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
}

interface BlockTypeDataElementRaw {
	name: string;
	selector: string;
}

interface BlockTypeDataElement extends BlockTypeDataElementRaw {
	id: string;
}

interface BlockTypeData {
	name: string;
	elements: BlockTypeDataElementRaw[];
}
