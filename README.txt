=== _PLUGIN_NAME_ ===
Contributors: _PLUGIN_AUTHOR_
Tags: _PLUGIN_TAGS_
Requires at least: _PLUGIN_REQUIRES_AT_LEAST_
Tested up to: _PLUGIN_TESTED_UP_TO_
Stable tag: _PLUGIN_VERSION_
Requires PHP: _PLUGIN_PHP_VERSION_
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

_PLUGIN_DESCRIPTION_

== Description ==

Add Typography to your site using Google Fonts. Enter CSS selectors or select Blocks to apply custom typography.
Available typography options:

* Font family & variants from Google Fonts
* Color (hex or rgba)
* Font size
* Line height
* Font weight
* Font style (italic, normal, oblique)
* Letter spacing
* Text transform (capitalize, uppercase, lowercase)
* Text decoration (line-through, overline, underline)

Typographies can be assigned to a specific context:

* All site
* Post types/s (post types available in the site)
* Post types/s template (index, single)
* Front page
* 404 page

Each typography can have several groups of selectors with unique modifications from the root typography.
For example: a typography can be set with a certain Font, a certain Color and a certain Font size;
each of its groups of selectors inherit those properties and one might modify the inherited color and another modify the inherited Font size.

Available CSS selectors:

* Text CSS selector (eg: .site-title a)
* Block Selector (eg: Block Quote > Citation)

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

= 1.1.0 =
* Include core blocks selection in Customizer.
* Sort typographies styles so that newer take preference over older.
* Improvemenets in the UI and added some UX hints.
* Fix Customizer Previewer bugs.
* Improve code base.
* Update dependencies.

= 1.0.0 =
* Initial release.

== Screenshots ==

1. Customizer, all typographies created.
2. Customizer, typography being edited.
3. Post editor, Block selectors.
