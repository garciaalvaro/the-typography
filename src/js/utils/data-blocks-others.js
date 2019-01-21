const stackable = [
	{
		name: "ugb/testimonial",
		elements: [
			{ name: "Body", selector: ".ugb-testimonial__body" },
			{ name: "Person name", selector: ".ugb-testimonial__name" },
			{ name: "Person position", selector: ".ugb-testimonial__position" }
		]
	},
	{
		name: "ugb/team-member",
		elements: [
			{ name: "Name", selector: ".ugb-team-member__name" },
			{ name: "Position", selector: ".ugb-team-member__position" },
			{ name: "Description", selector: ".ugb-team-member__description" }
		]
	},
	{
		name: "ugb/pricing-box",
		elements: [
			{ name: "Title", selector: ".ugb-pricing-box__title" },
			{ name: "Price prefix", selector: ".ugb-pricing-box__price-prefix" },
			{ name: "Price", selector: ".ugb-pricing-box__price" },
			{ name: "Price suffix", selector: ".ugb-pricing-box__price-suffix" },
			{ name: "Price description", selector: ".ugb-pricing-box__subprice" },
			{ name: "Button", selector: ".ugb-button--inner" },
			{ name: "Description", selector: ".ugb-pricing-box__description" }
		]
	},
	{
		name: "ugb/number-box",
		elements: [
			{ name: "Number", selector: ".ugb-number-box__number" },
			{ name: "Title", selector: ".ugb-number-box__title" },
			{ name: "Description", selector: ".ugb-number-box__description" }
		]
	},
	{
		name: "ugb/header",
		elements: [
			{ name: "Title", selector: ".ugb-header__title" },
			{ name: "Sub title", selector: ".ugb-header__subtitle" },
			{ name: "Button", selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/feature",
		elements: [
			{ name: "Title", selector: ".ugb-feature__title" },
			{ name: "Sub title", selector: ".ugb-feature__subtitle" },
			{ name: "Button", selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/feature-grid",
		elements: [
			{ name: "Title", selector: ".ugb-feature-grid__title" },
			{ name: "Sub title", selector: ".ugb-feature-grid__subtitle" },
			{ name: "Button", selector: ".ugb-button" }
		]
	},
	{
		name: "ugb/accordion",
		elements: [
			{ name: "Title", selector: ".ugb-accordion__heading" },
			{ name: "Text", selector: ".ugb-accordion__text" }
		]
	},
	{
		name: "ugb/blockquote",
		elements: [{ name: "Text", selector: ".ugb-blockquote__text" }]
	},
	{
		name: "ugb/button",
		elements: [{ name: "Text", selector: ".ugb-button--inner" }]
	},
	{
		name: "ugb/blog-posts",
		elements: [
			{ name: "Block root", selector: ".ugb-blog-posts" },
			{ name: "Category", selector: ".ugb-blog-posts__category-list a" },
			{ name: "Meta", selector: ".ugb-blog-posts__meta" },
			{ name: "Title", selector: ".ugb-blog-posts__title a" },
			{ name: "Excerpt", selector: ".ugb-blog-posts__excerpt" }
		]
	},
	{
		name: "ugb/cta",
		elements: [
			{ name: "Title", selector: ".ugb-cta__title" },
			{ name: "Description", selector: ".ugb-cta__description" },
			{ name: "Button", selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/card",
		elements: [
			{ name: "Title", selector: ".ugb-card__title" },
			{ name: "Sub title", selector: ".ugb-card__tagline" },
			{ name: "Description", selector: ".ugb-card__description" },
			{ name: "Button", selector: ".ugb-button--inner" }
		]
	},
	{
		name: "ugb/count-up",
		elements: [
			{ name: "Title", selector: ".ugb-countup__title" },
			{ name: "Counter", selector: ".ugb-countup__counter" },
			{ name: "Description", selector: ".ugb-countup__description" }
		]
	},
	{
		name: "ugb/expand",
		elements: [
			{ name: "Show less text", selector: ".ugb-expand__less-text" },
			{ name: "Show less toggle", selector: ".ugb-expand__less-toggle-text" },
			{ name: "Show more text", selector: ".ugb-expand__more-text" },
			{ name: "Show more toggle", selector: ".ugb-expand__more-toggle-text" }
		]
	}
];

const coblocks = [
	{
		name: "coblocks/author",
		elements: [
			{ name: "Heading", selector: ".wp-block-coblocks-author__heading" },
			{ name: "Name", selector: ".wp-block-coblocks-author__name" },
			{ name: "Biography", selector: ".wp-block-coblocks-author__biography" },
			{ name: "Button", selector: ".wp-block-button__link" }
		]
	},
	{
		name: "coblocks/highlight",
		elements: [
			{ name: "Content", selector: ".wp-block-coblocks-highlight__content" }
		]
	},
	{
		name: "coblocks/click-to-tweet",
		elements: [
			{ name: "Text", selector: ".wp-block-coblocks-click-to-tweet__text" },
			{
				name: "Button",
				selector: ".wp-block-coblocks-click-to-tweet__twitter-btn"
			}
		]
	},
	{
		name: "coblocks/acordion",
		elements: [
			{ name: "Title", selector: ".wp-block-coblocks-accordion-item__title" },
			{
				name: "Content",
				selector: ".wp-block-coblocks-accordion-item__content"
			}
		]
	},
	{
		name: "coblocks/alert",
		elements: [
			{ name: "Title", selector: ".wp-block-coblocks-alert__title" },
			{ name: "Text", selector: ".wp-block-coblocks-alert__text" }
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
			{ name: "Button", selector: ".wp-block-button__link" }
		]
	}
];
const atomic_blocks = [
	{
		name: "atomic-blocks/ab-testimonial",
		elements: [
			{ name: "Text", selector: ".ab-testimonial-text" },
			{ name: "Name", selector: ".ab-testimonial-name" },
			{ name: "Title", selector: ".ab-testimonial-title" }
		]
	},
	{
		name: "atomic-blocks/ab-profile-box",
		elements: [
			{ name: "Name", selector: ".ab-profile-name" },
			{ name: "Title", selector: ".ab-profile-title" },
			{ name: "Text", selector: ".ab-profile-text" }
		]
	},
	{
		name: "atomic-blocks/ab-notice",
		elements: [
			{ name: "Title", selector: ".ab-notice-title" },
			{ name: "Text", selector: ".ab-notice-text" }
		]
	},
	{
		name: "atomic-blocks/ab-button",
		elements: [{ name: "Link", selector: ".ab-button" }]
	},
	{
		name: "atomic-blocks/ab-accordion",
		elements: [
			{ name: "Title", selector: ".ab-accordion-title" },
			{ name: "Text", selector: ".ab-accordion-text" }
		]
	},
	{
		name: "atomic-blocks/ab-cta",
		elements: [
			{ name: "Title", selector: ".ab-cta-title" },
			{ name: "Text", selector: ".ab-cta-text" },
			{ name: "Button", selector: ".ab-cta-button" }
		]
	},
	{
		name: "atomic-blocks/ab-sharing",
		elements: [
			{ name: "Twitter", selector: ".ab-share-twitter .ab-social-text" },
			{ name: "Facebook", selector: ".ab-share-facebook .ab-social-text" }
		]
	},
	{
		name: "atomic-blocks/ab-post-grid",
		elements: [
			{ name: "Block root", selector: ".ab-block-post-grid" },
			{ name: "Title", selector: ".ab-block-post-grid-title a" },
			{ name: "Meta", selector: ".ab-block-post-grid-byline" },
			{ name: "Excerpt", selector: ".ab-block-post-grid-excerpt p" },
			{
				name: "Read more",
				selector: ".ab-block-post-grid-excerpt .ab-text-link"
			}
		]
	},
	{
		name: "atomic-blocks/ab-pricing",
		elements: [
			{ name: "Title", selector: ".ab-pricing-table-title" },
			{ name: "Sub title", selector: ".ab-pricing-table-subtitle" },
			{ name: "Button", selector: ".ab-block-button .ab-button" },
			{ name: "Price", selector: ".ab-pricing-table-price" },
			{ name: "Price term", selector: ".ab-pricing-table-term" },
			{ name: "Price currency", selector: ".ab-pricing-table-currency" },
			{ name: "Features", selector: ".ab-pricing-table-features" }
		]
	}
];

export default [...stackable, ...coblocks, ...atomic_blocks];
