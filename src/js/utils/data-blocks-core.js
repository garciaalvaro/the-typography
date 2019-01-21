export default [
	{
		name: "core/more",
		elements: [{ name: "Block root", selector: ".more-link" }]
	},
	{
		name: "core/quote",
		elements: [
			{ name: "Body", selector: "p" },
			{ name: "Citation", selector: "cite" }
		]
	},
	{
		name: "core/categories",
		elements: [
			{
				name: "Item",
				selector: ".cat-item"
			},
			{
				name: "Link",
				selector: ".wp-block-button__link"
			}
		]
	},
	{
		name: "core/button",
		elements: [{ name: "Link", selector: ".wp-block-button__link" }]
	},
	{
		name: "core/latest-comments",
		elements: [
			{
				name: "Meta",
				selector: ".wp-block-latest-comments__comment-meta"
			},
			{
				name: "Excerpt",
				selector: ".wp-block-latest-comments__comment-excerpt"
			},
			{
				name: "Author",
				selector: ".wp-block-latest-comments__comment-author"
			},
			{
				name: "Link",
				selector: ".wp-block-latest-comments__comment-link"
			},
			{
				name: "Date",
				selector: ".wp-block-latest-comments__comment-date"
			}
		]
	},
	{
		name: "core/latest-posts",
		elements: [
			{ name: "Date", selector: ".wp-block-latest-posts__post-date" },
			{ name: "Title", selector: "a" }
		]
	},
	{
		name: "core/archives",
		elements: [
			{ name: "Item", selector: "li" },
			{ name: "Link", selector: "a" }
		]
	},
	{
		name: "core/pullquote",
		elements: [
			{ name: "Body", selector: "p" },
			{ name: "Citation", selector: "cite" }
		]
	}
];
