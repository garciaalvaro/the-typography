import { useRef, useEffect, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";

import { DivRef } from "utils/Components";
import { is_customizer, store_slug } from "utils/data";
import { useWindowSize } from "utils/hooks";

export const AppContainer: React.ComponentType = props => {
	const { children } = props;

	const view = useSelect<State["view"]>(select =>
		select(store_slug).getView()
	);

	const { window_width, window_height } = useWindowSize();

	const [height, setHeight] = useState(555);

	const div_ref = useRef<HTMLDivElement | null>(null);

	const container_ref = useRef<HTMLElement | null>(null);

	const header_ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (!div_ref.current) {
			return;
		}

		container_ref.current = div_ref.current.closest(
			is_customizer
				? "div.wp-full-overlay-sidebar-content"
				: ".edit-post-editor-regions__sidebar"
		) as HTMLElement | null;

		if (container_ref.current) {
			header_ref.current = container_ref.current.querySelector(
				is_customizer
					? "li.customize-section-description-container"
					: ".edit-post-sidebar-header"
			) as HTMLElement | null;
		}
	}, []);

	useEffect(() => {
		if (!div_ref.current) {
			return;
		}

		div_ref.current.scrollTop = 0;
	}, [view]);

	useEffect(() => {
		if (!div_ref.current || !container_ref.current) {
			return;
		}

		setHeight(
			container_ref.current.offsetHeight -
				(header_ref.current ? header_ref.current.offsetHeight : 0) -
				(is_customizer ? 15 : 0) // margin-bottom
		);
	}, [window_width, window_height]);

	return (
		<DivRef
			ref={div_ref}
			id="container"
			className="color_scheme-type-light"
			style={{ height }}
		>
			{children}
		</DivRef>
	);
};
