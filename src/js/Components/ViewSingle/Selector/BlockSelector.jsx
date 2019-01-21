import l, { is_customizer, Span, Div, pr, blocks_data } from "../../../utils";
import SelectorType from "./SelectorType";
import ButtonRemove from "./ButtonRemove";
import BlockSelect from "./BlockSelect";
import BlockElementSelect from "./BlockElementSelect";

const { isUndefined, forEach, snakeCase } = lodash;
const { __ } = wp.i18n;
const { compose, withState } = wp.compose;
const { Component, Fragment } = wp.element;
const { withSelect } = wp.data;

const blocks_from_custom = [
	...wp.hooks.applyFilters("theTypographyAddBlockElements", []),
	...blocks_data
];
const is_editor = !is_customizer;

class BlockSelector extends Component {
	componentDidMount = () => {
		const { block_selector_extra } = this.props;

		this.updateBlockElements(block_selector_extra);
	};

	componentDidUpdate = prev_props => {
		const { block_name, updateProp, block_title_from_store } = this.props;

		if (block_name !== prev_props.block_name) {
			const root_selector = this.updateBlockElements();

			updateProp("block_title", block_title_from_store);
			updateProp("block_element_label", "Block Root");
			updateProp("block_selector_root", root_selector);
			updateProp("block_selector_extra", "");
		}
	};

	updateBlockElements = (block_selector_extra = "") => {
		// block_elements
		const { block_name, setState } = this.props;
		const block_from_custom = blocks_from_custom.find(
			({ name }) => name === block_name
		);
		let root_selector = `.wp-block-${block_name
			.replace(/^core\//, "")
			.replace(/\//g, "-")}`;
		let block_elements;

		if (isUndefined(block_from_custom)) {
			block_elements = [
				{ value: "block_root", label: "Block root", selector: root_selector },
				{ value: "custom_selector", label: "Custom selector" }
			];
		} else {
			let elements = block_from_custom.elements.map(({ name, selector }) => ({
				value: snakeCase(name),
				label: name,
				selector
			}));

			if (elements.find(({ value }) => value === "block_root")) {
				root_selector = elements.find(({ value }) => value === "block_root")
					.selector;

				elements = elements.filter(({ value }) => value !== "block_root");
			}

			block_elements = [
				...elements,
				{ value: "block_root", label: "Block root", selector: root_selector },
				{ value: "custom_selector", label: "Custom selector" }
			];
		}

		// block_element
		let block_element;

		const element = block_elements.find(({ value, selector }) => {
			if (value === "block_root") {
				return block_selector_extra === "";
			}

			return block_selector_extra === selector;
		});

		if (isUndefined(element)) {
			block_element = "custom_selector";
		} else {
			block_element = element.value;
		}

		setState({ block_element, block_elements });

		return root_selector;
	};

	render() {
		const { props } = this;
		const {
			id,
			parent_id,
			block_name,
			block_elements,
			block_title_from_store
		} = props;

		if (block_elements === null) {
			return null;
		}

		return (
			<Fragment>
				<ButtonRemove id={id} parent_id={parent_id} />
				<SelectorType {...props} />
				{is_editor && block_name !== "" && block_title_from_store === "" && (
					<Span className={`${pr}-message`}>
						{__("The Block could not be found.")}
					</Span>
				)}
				{is_customizer && (
					<Span className={`${pr}-message ${pr}-message-go_to_editor`}>
						{__(
							"To use this feature go to any Post editor where the Block editor is enabled."
						)}
					</Span>
				)}
				{(!is_customizer || block_name !== "") && <BlockSelect {...props} />}
				{block_name !== "" && <BlockElementSelect {...props} />}
			</Fragment>
		);
	}
}

export default compose([
	withState({
		block_elements: null,
		block_element: null
	}),
	withSelect((select, { block_name }) => {
		const { getBlockType, getBlockTypes } = select("core/blocks");
		// Some blocks do not have a class assigned (like the paragraph, header or list core blocks)
		// so we exclude them as it is not possible to target them in CSS.
		const blocks_not_valid = ["core/paragraph", "core/heading", "core/list"];
		const blocks_from_store = [];
		const block_type = getBlockType(block_name);
		const block_title_from_store = isUndefined(block_type)
			? ""
			: block_type.title;
		const block_icon = isUndefined(block_type) ? null : block_type.icon.src;

		forEach(getBlockTypes(), ({ name, title, icon, parent }) => {
			if (blocks_not_valid.includes(name)) {
				return;
			}
			if (!isUndefined(parent)) {
				return;
			}

			blocks_from_store.push({
				value: name,
				label: title,
				icon: icon.src
			});
		});

		return { blocks_from_store, block_icon, block_title_from_store };
	})
])(BlockSelector);
