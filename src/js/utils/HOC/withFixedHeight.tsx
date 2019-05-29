import l, { is_customizer, DivForwardRef } from "utils";

interface withState extends setState<withState> {
	height: number;
}
interface withGlobalEvents {
	resize: FunctionVoid;
}
interface Parent {
	view: State["view"];
}
type Props = withGlobalEvents & withState & Parent;

const { debounce } = lodash;
const { compose, withGlobalEvents, withState } = wp.compose;
const { Component, createRef } = wp.element;

const withFixedHeight = <P extends Props>(
	WrappedComponent: React.ComponentType<P>
) =>
	class extends Component<P> {
		ref = createRef();

		constructor(props: P) {
			super(props);

			let initiated = false;

			if (is_customizer) {
				wp.customize.section("section_thet").expanded.bind(() => {
					if (!initiated) {
						initiated = true;
						this.calculateSize();
					}
				});
			}
		}

		componentDidUpdate = (prev_props: P) => {
			const { view } = this.props;

			if (this.ref.current && view !== prev_props.view) {
				// @ts-ignore
				this.ref.current.scrollTop = 0;
			}
		};

		componentDidMount = () => {
			this.calculateSize();
		};

		calculateSize = () => {
			if (this.ref.current === null) {
				return;
			}

			const { setState } = this.props;
			const $el = jQuery(this.ref.current);
			let $container;
			let height;

			if (is_customizer) {
				$container = $el.closest("div.wp-full-overlay-sidebar-content");

				if (!$container.length) {
					return;
				}

				height =
					// @ts-ignore
					$container.outerHeight() -
					// @ts-ignore
					$container
						.find("li.customize-section-description-container")
						.outerHeight() -
					20;
			} else {
				$container = $el.closest(".edit-post-sidebar");

				if (!$container.length) {
					return;
				}

				height =
					// @ts-ignore
					$container.outerHeight() -
					// @ts-ignore
					$container
						.children(".edit-post-sidebar-header:visible")
						.outerHeight() -
					// @ts-ignore
					$container
						.children(".edit-post-sidebar-header__small:visible")
						.outerHeight();
			}

			setState({ height });
		};

		handleResize = debounce(this.calculateSize, 200, {
			leading: false,
			trailing: true
		});

		render() {
			const height = this.props.height;
			const height_prepared = height > 450 ? height : null;

			return (
				<DivForwardRef
					ref={this.ref}
					style={{ height: height_prepared }}
					classes={[height > 450 ? "sticky" : null]}
					id="fixed_height_container"
				>
					<WrappedComponent {...this.props} />
				</DivForwardRef>
			);
		}
	};

export default compose([
	withState({
		height: 500
	}),
	withGlobalEvents({
		resize: "handleResize"
	}),
	withFixedHeight
]);
