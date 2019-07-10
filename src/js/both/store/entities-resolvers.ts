import l, { blocks_data } from "utils";
import actions from "./_actions";

const { unionBy, snakeCase } = lodash;
const { __ } = wp.i18n;

const resolvers = {
	*getBlocks() {
		const all_blocks_data = [
			...wp.hooks.applyFilters("theTypography.addBlockTypeData", []),
			...blocks_data
		];

		// Some blocks do not have a class assigned (like the paragraph, header or list core blocks)
		// so we exclude them as it is not possible to target them in CSS.
		const blocks_not_valid = ["core/paragraph", "core/heading", "core/list"];
		let blocks_types_raw;
		blocks_types_raw = yield wp.data.select("core/blocks").getBlockTypes();
		blocks_types_raw = blocks_types_raw.filter(
			({ name }: any) => !blocks_not_valid.includes(name)
		);

		const blocks: BlockType[] = blocks_types_raw.map(
			({ name, title, icon }: any) => {
				const block_data = all_blocks_data.find(block => block.name === name);
				const block: BlockType = {
					name,
					title,
					icon: icon.src ? icon.src : icon,
					elements: []
				};
				let elements;
				elements = block_data && block_data.elements ? block_data.elements : [];
				elements = elements.map(({ name, selector }: any) => ({
					value: snakeCase(name),
					label: name,
					selector
				}));

				block.elements = unionBy(
					[
						{
							value: "custom_selector",
							label: __("Custom selector"),
							selector: ""
						},
						...elements,
						{
							value: "block_root",
							label: __("Block root"),
							selector: `.wp-block-${name
								.replace(/^core\//, "")
								.replace(/\//g, "-")}`
						}
					],
					"value"
				);

				return block;
			}
		);

		return yield actions.updateBlocks(blocks);
	}
};

export default resolvers;
