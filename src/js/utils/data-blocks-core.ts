const { __ } = wp.i18n;

export default [
	{
		name: "core/more",
		elements: [{ name: __("Block root"), selector: ".more-link" }]
	},
	{
		name: "core/quote",
		elements: [
			{ name: __("Body"), selector: "p" },
			{ name: __("Citation"), selector: "cite" }
		]
	},
	{
		name: "core/categories",
		elements: [
			{
				name: __("Item"),
				selector: ".cat-item"
			},
			{
				name: __("Link"),
				selector: ".wp-block-button__link"
			}
		]
	},
	{
		name: "core/button",
		elements: [{ name: __("Link"), selector: ".wp-block-button__link" }]
	},
	{
		name: "core/latest-comments",
		elements: [
			{
				name: __("Meta"),
				selector: ".wp-block-latest-comments__comment-meta"
			},
			{
				name: __("Excerpt"),
				selector: ".wp-block-latest-comments__comment-excerpt"
			},
			{
				name: __("Author"),
				selector: ".wp-block-latest-comments__comment-author"
			},
			{
				name: __("Link"),
				selector: ".wp-block-latest-comments__comment-link"
			},
			{
				name: __("Date"),
				selector: ".wp-block-latest-comments__comment-date"
			}
		]
	},
	{
		name: "core/latest-posts",
		elements: [
			{ name: __("Date"), selector: ".wp-block-latest-posts__post-date" },
			{ name: __("Title"), selector: "a" }
		]
	},
	{
		name: "core/archives",
		elements: [
			{ name: __("Item"), selector: "li" },
			{ name: __("Link"), selector: "a" }
		]
	},
	{
		name: "core/pullquote",
		elements: [
			{ name: __("Body"), selector: "p" },
			{ name: __("Citation"), selector: "cite" }
		]
	}
];
