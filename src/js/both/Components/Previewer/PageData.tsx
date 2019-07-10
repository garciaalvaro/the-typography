import l, { pr_store } from "utils";

interface withState extends setState<withState> {
	previewer_ready: boolean;
}
interface withDispatch {
	updatePreviewerPageData: FunctionVoid;
	updateTypographiesVisibility: FunctionVoid;
	updateSingleVisibility: FunctionVoid;
}
type Props = withDispatch & withState;

const { Component } = wp.element;
const { compose, withState } = wp.compose;
const { withDispatch } = wp.data;

class PageData extends Component<Props> {
	componentDidMount = () => {
		const {
			setState,
			updatePreviewerPageData,
			updateTypographiesVisibility,
			updateSingleVisibility
		} = this.props;
		const { previewer } = wp.customize;

		previewer.bind("ready", () => {
			if (!this.props.previewer_ready) {
				// Listen to the current post data sent from the Previewer window.
				previewer.bind("thet-page_data", (page_data: State["page_data"]) => {
					updatePreviewerPageData(page_data);
					updateTypographiesVisibility(page_data);
					updateSingleVisibility(page_data);
				});

				setState({ previewer_ready: true });
			}
		});
	};

	render() {
		return null;
	}
}

export default compose([
	withState({ previewer_ready: false }),
	withDispatch<withDispatch>(dispatch => {
		const {
			updatePreviewerPageData,
			updateTypographiesVisibility,
			updateSingleVisibility
		} = dispatch(pr_store);

		return {
			updatePreviewerPageData,
			updateTypographiesVisibility,
			updateSingleVisibility
		};
	})
])(PageData);
