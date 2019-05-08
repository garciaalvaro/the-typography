import l, { is_customizer, DivForwardRef } from "../index";

const { debounce } = lodash;
const { compose, withGlobalEvents, withState } = wp.compose;
const { Component, createRef } = wp.element;

const withFixedHeight = WrappedComponent =>
	class extends Component {
		constructor(props) {
			super(props);

			this.ref = createRef();

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

		componentDidUpdate = prev_props => {
			const { view } = this.props;

			if (view !== prev_props.view) {
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

				height =
					$container.outerHeight() -
					$container
						.find("li.customize-section-description-container")
						.outerHeight() -
					20;
			} else {
				$container = $el.closest(".edit-post-sidebar");

				height =
					$container.outerHeight() -
					$container
						.children(".edit-post-sidebar-header:visible")
						.outerHeight() -
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
					classes={height > 450 ? "sticky" : null}
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
