// import l, { is_editor, is_customizer, blocks_data, pr_store } from "utils";

// const { unionBy, snakeCase } = lodash;
// const { __ } = wp.i18n;
// const { Component } = wp.element;
// const { compose } = wp.compose;
// const { withSelect, withDispatch } = wp.data;

// const all_blocks_data = [
// 	...wp.hooks.applyFilters("theTypography.addBlockTypeData", []),
// 	...blocks_data
// ];

// class Blocks extends Component {
// 	componentDidMount() {
// 		if (is_customizer) {
// 			this.updateBlocks();
// 		}
// 	}

// 	componentDidUpdate(prev_props) {
// 		const { active_sidebar, blocks, blocks_raw } = this.props;

// 		if (
// 			(is_editor &&
// 				(active_sidebar === "the-typography/the-typography" &&
// 					!blocks.length)) ||
// 			blocks_raw.length !== prev_props.blocks_raw.length
// 		) {
// 			this.updateBlocks();
// 		}
// 	}

// 	updateBlocks() {
// 		const { blocks_raw, updateBlocks } = this.props;

// 		const blocks = blocks_raw.map(({ name, title, icon }) => {
// 			const block_data = all_blocks_data.find(block => block.name === name);
// 			const block = { name, title, icon: icon.src ? icon.src : icon };
// 			let elements;
// 			elements = block_data && block_data.elements ? block_data.elements : [];
// 			elements = elements.map(({ name, selector }) => ({
// 				value: snakeCase(name),
// 				label: name,
// 				selector
// 			}));

// 			block.elements = unionBy(
// 				[
// 					{
// 						value: "custom_selector",
// 						label: __("Custom selector"),
// 						selector: ""
// 					},
// 					...elements,
// 					{
// 						value: "block_root",
// 						label: __("Block root"),
// 						selector: `.wp-block-${name
// 							.replace(/^core\//, "")
// 							.replace(/\//g, "-")}`
// 					}
// 				],
// 				"value"
// 			);

// 			return block;
// 		});

// 		updateBlocks(blocks);
// 	}

// 	render() {
// 		return null;
// 	}
// }

// export default compose([
// 	withDispatch(dispatch => {
// 		const { updateBlocks } = dispatch(pr_store);

// 		return { updateBlocks };
// 	}),
// 	withSelect(select => {
// 		const { getBlocks } = select(pr_store);
// 		const { getBlockTypes } = select("core/blocks");
// 		// Some blocks do not have a class assigned (like the paragraph, header or list core blocks)
// 		// so we exclude them as it is not possible to target them in CSS.
// 		const blocks_not_valid = ["core/paragraph", "core/heading", "core/list"];
// 		const blocks_raw = getBlockTypes().filter(
// 			({ name }) => !blocks_not_valid.includes(name)
// 		);

// 		return {
// 			blocks_raw,
// 			blocks: getBlocks(),
// 			active_sidebar: is_editor
// 				? select("core/edit-post").getActiveGeneralSidebarName()
// 				: null
// 		};
// 	})
// ])(Blocks);
