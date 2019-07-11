import { __ } from "@wordpress/i18n";

const core: BlockTypeData[] = [
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

const melonpan: BlockTypeData[] = [
	{
		name: "melonpan-block/container",
		elements: [{ name: __("Content"), selector: ".mbc-content" }]
	},
	{
		name: "melonpan-block/images",
		elements: [{ name: __("Caption"), selector: ".mbi-figcaption" }]
	}
];
const stackable: BlockTypeData[] = [
	{
		name: "ugb/testimonial",
		elements: [
			{ name: __("Body"), selector: ".ugb-testimonial__body" },
			{ name: __("Person name"), selector: ".ugb-testimonial__name" },
			{ name: __("Person position"), selector: ".ugb-testimonial__position" }
		]
	},
	{
		name: "ugb/team-member",
		elements: [
			{ name: __("Name"), selector: ".ugb-team-member__name" },
			{ name: __("Position"), selector: ".ugb-team-member__position" },
			{ name: __("Description"), selector: ".ugb-team-member__description" }
		]
	},
	{
		name: "ugb/pricing-box",
		elements: [
			{ name: __("Title"), selector: ".ugb-pricing-box__title" },
			{ name: __("Price prefix"), selector: ".ugb-pricing-box__price-prefix" },
			{ name: __("Price"), selector: ".ugb-pricing-box__price" },
			{ name: __("Price suffix"), selector: ".ugb-pricing-box__price-suffix" },
			{ name: __("Price description"), selector: ".ugb-pricing-box__subprice" },
			{ name: __("Button"), selector: ".ugb-button--inner" },
			{ name: __("Description"), selector: ".ugb-pricing-box__description" }
		]
	},
	{
		name: "ugb/number-box",
		elements: [
			{ name: __("Number"), selector: ".ugb-number-box__number" },
			{ name: __("Title"), selector: ".ugb-number-box__title" },
			{ name: __("Description"), selector: ".ugb-number-box__description" }
		]
	},
	{
		name: "ugb/header",
		elements: [
			{ name: __("Title"), selector: ".ugb-header__title" },
			{ name: __("Sub title"), selector: ".ugb-header__subtitle" },
			{ name: __("Button"), selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/feature",
		elements: [
			{ name: __("Title"), selector: ".ugb-feature__title" },
			{ name: __("Sub title"), selector: ".ugb-feature__subtitle" },
			{ name: __("Button"), selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/feature-grid",
		elements: [
			{ name: __("Title"), selector: ".ugb-feature-grid__title" },
			{ name: __("Sub title"), selector: ".ugb-feature-grid__subtitle" },
			{ name: __("Button"), selector: ".ugb-button" }
		]
	},
	{
		name: "ugb/accordion",
		elements: [
			{ name: __("Title"), selector: ".ugb-accordion__heading" },
			{ name: __("Text"), selector: ".ugb-accordion__text" }
		]
	},
	{
		name: "ugb/blockquote",
		elements: [{ name: __("Text"), selector: ".ugb-blockquote__text" }]
	},
	{
		name: "ugb/button",
		elements: [{ name: __("Text"), selector: ".ugb-button--inner" }]
	},
	{
		name: "ugb/blog-posts",
		elements: [
			{ name: __("Block root"), selector: ".ugb-blog-posts" },
			{ name: __("Category"), selector: ".ugb-blog-posts__category-list a" },
			{ name: __("Meta"), selector: ".ugb-blog-posts__meta" },
			{ name: __("Title"), selector: ".ugb-blog-posts__title a" },
			{ name: __("Excerpt"), selector: ".ugb-blog-posts__excerpt" }
		]
	},
	{
		name: "ugb/cta",
		elements: [
			{ name: __("Title"), selector: ".ugb-cta__title" },
			{ name: __("Description"), selector: ".ugb-cta__description" },
			{ name: __("Button"), selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/card",
		elements: [
			{ name: __("Title"), selector: ".ugb-card__title" },
			{ name: __("Sub title"), selector: ".ugb-card__tagline" },
			{ name: __("Description"), selector: ".ugb-card__description" },
			{ name: __("Button"), selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/count-up",
		elements: [
			{ name: __("Title"), selector: ".ugb-countup__title" },
			{ name: __("Counter"), selector: ".ugb-countup__counter" },
			{ name: __("Description"), selector: ".ugb-countup__description" }
		]
	},
	{
		name: "ugb/expand",
		elements: [
			{ name: __("Show less text"), selector: ".ugb-expand__less-text" },
			{
				name: __("Show less toggle"),
				selector: ".ugb-expand__less-toggle-text"
			},
			{ name: __("Show more text"), selector: ".ugb-expand__more-text" },
			{
				name: __("Show more toggle"),
				selector: ".ugb-expand__more-toggle-text"
			}
		]
	}
];

const coblocks: BlockTypeData[] = [
	{
		name: "coblocks/author",
		elements: [
			{ name: __("Heading"), selector: ".wp-block-coblocks-author__heading" },
			{ name: __("Name"), selector: ".wp-block-coblocks-author__name" },
			{
				name: __("Biography"),
				selector: ".wp-block-coblocks-author__biography"
			},
			{ name: __("Button"), selector: ".wp-block-button__link" }
		]
	},
	{
		name: "coblocks/highlight",
		elements: [
			{ name: __("Content"), selector: ".wp-block-coblocks-highlight__content" }
		]
	},
	{
		name: "coblocks/click-to-tweet",
		elements: [
			{ name: __("Text"), selector: ".wp-block-coblocks-click-to-tweet__text" },
			{
				name: "Button",
				selector: ".wp-block-coblocks-click-to-tweet__twitter-btn"
			}
		]
	},
	{
		name: "coblocks/acordion",
		elements: [
			{
				name: __("Title"),
				selector: ".wp-block-coblocks-accordion-item__title"
			},
			{
				name: "Content",
				selector: ".wp-block-coblocks-accordion-item__content"
			}
		]
	},
	{
		name: "coblocks/alert",
		elements: [
			{ name: __("Title"), selector: ".wp-block-coblocks-alert__title" },
			{ name: __("Text"), selector: ".wp-block-coblocks-alert__text" }
		]
	},
	{
		name: "coblocks/pricing-table-item",
		elements: [
			{
				name: "Title",
				selector: ".wp-block-coblocks-pricing-table-item__title"
			},
			{
				name: "Amount",
				selector: ".wp-block-coblocks-pricing-table-item__amount"
			},
			{
				name: "Features",
				selector: ".wp-block-coblocks-pricing-table-item__features"
			},
			{ name: __("Button"), selector: ".wp-block-button__link" }
		]
	}
];
const atomic_blocks: BlockTypeData[] = [
	{
		name: "atomic-blocks/ab-testimonial",
		elements: [
			{ name: __("Text"), selector: ".ab-testimonial-text" },
			{ name: __("Name"), selector: ".ab-testimonial-name" },
			{ name: __("Title"), selector: ".ab-testimonial-title" }
		]
	},
	{
		name: "atomic-blocks/ab-profile-box",
		elements: [
			{ name: __("Name"), selector: ".ab-profile-name" },
			{ name: __("Title"), selector: ".ab-profile-title" },
			{ name: __("Text"), selector: ".ab-profile-text" }
		]
	},
	{
		name: "atomic-blocks/ab-notice",
		elements: [
			{ name: __("Title"), selector: ".ab-notice-title" },
			{ name: __("Text"), selector: ".ab-notice-text" }
		]
	},
	{
		name: "atomic-blocks/ab-button",
		elements: [{ name: __("Link"), selector: ".ab-button" }]
	},
	{
		name: "atomic-blocks/ab-accordion",
		elements: [
			{ name: __("Title"), selector: ".ab-accordion-title" },
			{ name: __("Text"), selector: ".ab-accordion-text" }
		]
	},
	{
		name: "atomic-blocks/ab-cta",
		elements: [
			{ name: __("Title"), selector: ".ab-cta-title" },
			{ name: __("Text"), selector: ".ab-cta-text" },
			{ name: __("Button"), selector: ".ab-cta-button" }
		]
	},
	{
		name: "atomic-blocks/ab-sharing",
		elements: [
			{ name: __("Twitter"), selector: ".ab-share-twitter .ab-social-text" },
			{ name: __("Facebook"), selector: ".ab-share-facebook .ab-social-text" }
		]
	},
	{
		name: "atomic-blocks/ab-post-grid",
		elements: [
			{ name: __("Block root"), selector: ".ab-block-post-grid" },
			{ name: __("Title"), selector: ".ab-block-post-grid-title a" },
			{ name: __("Meta"), selector: ".ab-block-post-grid-byline" },
			{ name: __("Excerpt"), selector: ".ab-block-post-grid-excerpt p" },
			{
				name: "Read more",
				selector: ".ab-block-post-grid-excerpt .ab-text-link"
			}
		]
	},
	{
		name: "atomic-blocks/ab-pricing",
		elements: [
			{ name: __("Title"), selector: ".ab-pricing-table-title" },
			{ name: __("Sub title"), selector: ".ab-pricing-table-subtitle" },
			{ name: __("Button"), selector: ".ab-block-button .ab-button" },
			{ name: __("Price"), selector: ".ab-pricing-table-price" },
			{ name: __("Price term"), selector: ".ab-pricing-table-term" },
			{ name: __("Price currency"), selector: ".ab-pricing-table-currency" },
			{ name: __("Features"), selector: ".ab-pricing-table-features" }
		]
	}
];

export const block_types_data = [
	...core,
	...melonpan,
	...stackable,
	...coblocks,
	...atomic_blocks
];
