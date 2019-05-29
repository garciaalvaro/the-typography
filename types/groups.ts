declare interface ImagesUploaded {
	[key: string]: {
		[key: string]: Object;
	};
}

declare interface CustomImages {
	[namespace: string]: {
		[image_name: string]: CustomImage;
	};
}
declare interface CustomImage {
	id: string;
	name: string;
	wp_folder: string;
	image_path: string;
}
declare interface CustomImageRaw {
	name: string;
	wp_folder?: string;
	image_path: string;
}
declare interface CustomImageWithNamespace extends CustomImage {
	namespace: string;
}

declare interface BlockRaw {
	name: string;
	attributes?: Object;
	innerBlocks?: BlockRaw[];
	number_of_instances?: number;
}

declare interface Block {
	name: string;
	attributes: Object;
	innerBlocks: Block[];
	number_of_instances: number;
}

declare interface ItemRaw {
	title?: string;
	description?: string;
	description_list?: string[];
	description_img_url?: string;
	blocks?: BlockRaw[];
	meta?: Object;
}
declare interface BlockItemRaw extends Omit<ItemRaw, "blocks"> {
	blocks: BlockRaw[];
}
declare interface MetaItemRaw extends Omit<ItemRaw, "meta"> {
	meta: Object;
}

declare interface Item {
	actions: Group["actions"];
	id: string;
	title: string;
	description: string;
	description_list: string[];
	description_img_url: string;
	custom_images_name: string[];
	blocks?: Block[];
	// blocks: any;
	meta?: Object;
	// meta: any;
}
declare interface BlockItem extends Omit<Item, "blocks"> {
	blocks: Block[];
}
declare interface MetaItem extends Omit<Item, "meta"> {
	meta: Object;
}

declare interface GroupRaw {
	background_color?: string;
	namespace?: string;
	title?: string;
	description?: string;
	post_types?: string[];
	custom_images?: CustomImageRaw[];
	actions?: string[];
	items: ItemRaw[];
}
declare interface BlockGroupRaw extends Omit<GroupRaw, "items"> {
	items: BlockItemRaw[];
}
declare interface MetaGroupRaw extends Omit<GroupRaw, "items"> {
	items: MetaItemRaw[];
}

declare interface Group {
	id: string;
	background_color: string;
	namespace: string;
	title: string;
	description: string;
	post_types: string[];
	custom_images: CustomImage[];
	actions: string[];
	is_active: boolean;
	items: Item[];
}
declare interface BlockGroup extends Omit<Group, "items"> {
	items: BlockItem[];
}
declare interface MetaGroup extends Omit<Group, "items"> {
	items: MetaItem[];
}
