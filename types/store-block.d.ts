declare interface State {
	images_uploaded_ready: boolean;
	images_uploaded: ImagesUploaded;
	block_groups: BlockGroup[];
	meta_groups: MetaGroup[];
}

declare interface Selectors extends Object {
	isImagesUploadedReady: (state: State) => typeof state.images_uploaded_ready;
	getImagesUploaded: (state: State) => typeof state.images_uploaded;
	isMediaReady: (state: State, images: string[]) => boolean;
	getCustomImages: (state: State) => CustomImages;
	// getBlockGroups: (state: State) => Group[];
	getBlockGroups: (state: State) => typeof state.block_groups;
	getBlockGroupsLength: (state: State) => number;
	// getMetaGroups: (state: State) => Group[];
	getMetaGroups: (state: State) => typeof state.meta_groups;
	getMetaGroupsLength: (state: State) => number;
}
declare interface SelectorsR {
	isImagesUploadedReady: ReturnType<Selectors["isImagesUploadedReady"]>;
	getImagesUploaded: ReturnType<Selectors["getImagesUploaded"]>;
	isMediaReady: ReturnType<Selectors["isMediaReady"]>;
	getCustomImages: ReturnType<Selectors["getCustomImages"]>;
	getBlockGroups: ReturnType<Selectors["getBlockGroups"]>;
	getBlockGroupsLength: ReturnType<Selectors["getBlockGroupsLength"]>;
	getMetaGroups: ReturnType<Selectors["getMetaGroups"]>;
	getMetaGroupsLength: ReturnType<Selectors["getMetaGroupsLength"]>;
}

declare interface Actions extends Object {
	updateImagesUploaded: (images: ImagesUploaded) => void;
	fetchImagesUploaded: () => void;
	fetchImages: (images_id: number[]) => void;
	setOpenItem: (id: string) => void;
	addBlockGroups: (groups: BlockGroup[]) => void;
}
