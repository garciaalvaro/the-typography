=== The Typography ===
Contributors: melonpan
Tags: gutenberg, blocks, typography, text, fonts, customizer
Requires at least: 5.3
Tested up to: 5.4
Stable tag: 1.3.0
Requires PHP: 7.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

Add Typography to your Gutenberg site using Google Fonts.

== Description ==

[Demo](https://gutenberg-showcase.melonpan.io/the-typography) - [Documentation](https://melonpan.io/wordpress-plugins/the-typography) - [GitHub](https://github.com/garciaalvaro/the-typography)

Add Typography to your Gutenberg site using Google Fonts. Enter CSS selectors or select Blocks to apply custom typography.


== Typography style ==

Available typography options include:

* Font family & variants from Google Fonts
* Color (hex or rgba)
* Font size
* Line height
* Font weight
* Font style (italic, normal, oblique)
* Letter spacing
* Text transform (capitalize, uppercase, lowercase)
* Text decoration (line-through, overline, underline)


== Typography context ==

Typographies can be assigned to a specific context:

* All site
* Post types/s (post types available on the site)
* Post types/s template (index, single)
* Front page
* 404 page


== Typography selectors ==

Each typography can have several groups of selectors with unique modifications based on the root typography.
For example: a typography can be set with a certain Font, Color and Font size;
each of its groups of selectors inherit those properties and one could modify the inherited color and other the inherited Font size.

Available CSS selectors include:

- Text CSS selector (eg: .site-title a)
- Block Selector (eg: Block Quote > Citation)


== Usage ==

The plugin can be accesed from the Customizer inside the tab **The Typography**.
It can also be accesed from any Block editor's **The Typography** sidebar (top right corner of the editor).
Create a typography and assign it some options; create a group of selectors and inside it create some CSS or Block selectors.
That's it!
If you want to preview the different fonts before selecting one you can preview them in the [Google Fonts repository](https://fonts.google.com/).
**Note**: The typography editing is assigned to the 'edit_theme_options' capability. This means that, by default, only admin and super admin will be able to use the features.


== Installation ==

Installation from the WordPress admin.

1. Log in to the WordPress admin and navigate to *Plugins > Add New*.
2. Type *The Typography* in the Search field.
3. In the results list *The Typography* plugin should appear, click **Install Now** button.
4. Once it finished installing, click the *Activate* button.
5. Now you can go to any post where the Block editor is enabled or go the Theme Customizer.


== Frequently Asked Questions ==

= About GDPR and Google Fonts =

This plugin lets you select fonts from the [Google Fonts repository](https://fonts.google.com/) that will be loaded dynamically when selecting them in the customizer/editor (to preview the result), and loaded on the front end site.
An inline style sheet is embeded with the selected CSS styles and, if one or more Font Family are selected, an external style sheet is embeded which will load the fonts from the Google servers.
As I am not a lawyer I can not guarantee anything; you can read about Google Fonts and GDPR compliance in [this link](https://github.com/google/fonts/issues/1495).

The following filters can be used to modify (or remove) the styles and fonts before they are embeded in the front end:

* `the_typography_styles_before_enqueue`: This filter receives an array with the styles before they are embeded to the front end.
* `the_typography_fonts_before_enqueue`: This filter receives an array with the fonts before they are embeded as an external style sheet to be loaded in the front end.


== Changelog ==

= 1.3.0 =
* Updated fonts
* Added linter for development
* Updated dependencies
* Minor fixes

= 1.2.0 =
* Refactored code base. Migrated JavaScript to TypeScript
* UI & UX improvements. CSS and JS small bug fixes
* Letter Spacing allows negative values
* Incremented Font Size maximum value to 80
* Upgraded minimum version to WP 5.3. The plugin can be used in 5.2 activating the Gutenberg plugin

= 1.1.0 =
* Include core blocks selection in Customizer
* Sort typographies styles so that newer take preference over older
* Improvements in the UI and added some UX hints
* Fix Customizer Previewer bugs
* Improve code base
* Update dependencies

= 1.0.0 =
* Initial release


== Screenshots ==

1. Typography options
2. Customizer panel
