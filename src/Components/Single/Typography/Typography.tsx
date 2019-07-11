import { uniqBy, snakeCase, sortBy } from "lodash";
import { __ } from "@wordpress/i18n";
import { useSelect } from "@wordpress/data";
import { createContext } from "@wordpress/element";

import "./Typography.styl";
import { Div } from "utils/Components";
import { store_slug, is_customizer, block_types_data } from "utils/data";
import { useColorScheme, useIsPredefinedSingle } from "hooks";
import { TypographyVisibility } from "../../TypographyVisibility/TypographyVisibility";
import { TypographyTitle } from "../TypographyTitle/TypographyTitle";
import { TypographyContext } from "../TypographyContext/TypographyContext";
import { TypographyStyle } from "../TypographyStyle/TypographyStyle";
import { SelectorGroups } from "../SelectorGroups/SelectorGroups";

interface ContextProps {
	block_types: BlockType[];
}

export const ContextBlockTypes = createContext<ContextProps>({
	block_types: []
});

export const Typography: React.ComponentType = props => {
	const is_predefined = useIsPredefinedSingle();
	const color_scheme = useColorScheme();
	const is_visible = useSelect<boolean>(select =>
		select(store_slug).isVisibleSingle()
	);
	const is_active = useSelect<boolean>(select =>
		select(store_slug).isActiveSingle()
	);
	const block_types = useSelect<BlockType[]>(select =>
		select("core/blocks")
			.getBlockTypes()
			.map(({ name, title, icon }) => {
				const data = block_types_data.find(data => data.name === name);
				const elements_default = [
					{
						id: "root",
						name: __("Block root"),
						selector:
							".wp-block-" + name.replace(/^core\//, "").replace(/\//, "-")
					},
					{
						id: "custom",
						name: __("Custom selector"),
						selector: ""
					}
				];
				const elements = data
					? // If "Block root" exists in data.elements, we remove the default.
					  uniqBy([...data.elements, ...elements_default], "name")
					: elements_default;

				return {
					value: name,
					label: title,
					icon: icon.src || icon,
					elements: sortBy(
						elements.map(element => ({
							id: snakeCase(element.name),
							...element
						})),
						"name"
					)
				};
			})
	);

	return (
		<ContextBlockTypes.Provider value={{ block_types }}>
			<Div
				id="content-single"
				className={[
					"content",
					`color_scheme-type-${color_scheme}`,
					is_predefined ? "is_predefined" : null
				]}
			>
				{is_customizer && (
					<TypographyVisibility is_visible={is_visible} is_active={is_active} />
				)}

				<TypographyTitle />
				<TypographyContext />
				<TypographyStyle />
				<SelectorGroups />
			</Div>
		</ContextBlockTypes.Provider>
	);
};
