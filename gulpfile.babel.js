import gulp from "gulp";
import zip from "gulp-zip";
import header from "gulp-header";
import rename from "gulp-rename";
import replace from "gulp-replace";
import run from "gulp-run-command";
import fs from "fs";
import merge2 from "merge2";
import pkg from "./package.json";

const main_plugin_file = `${pkg.name}.php`;

gulp.task(
	"parcel",
	run([
		`parcel build src/index-editor.js -o ${
			pkg.name
		}-editor.min.js -d build --no-source-maps`,
		`parcel build src/index-customizer.js -o ${
			pkg.name
		}-customizer.min.js -d build --no-source-maps`,
		`parcel build src/index-customizer-preview.js -o ${
			pkg.name
		}-customizer-preview.min.js -d build --no-source-maps`
	])
);

gulp.task("version", () => {
	const main_php = gulp
		.src(main_plugin_file)
		.pipe(replace(/( \* Version: )\d+\.\d+\.\d+/g, "$1" + pkg.version))
		.pipe(
			replace(/(define.*?PLUGIN_VERSION.*?)\d+\.\d+\.\d+/g, "$1" + pkg.version)
		)
		.pipe(gulp.dest("."));

	const readme_txt = gulp
		.src("readme.txt")
		.pipe(replace(/(Stable tag: )\d+\.\d+\.\d+/g, "$1" + pkg.version))
		.pipe(gulp.dest("."));

	return merge2(main_php, readme_txt);
});

gulp.task("zip", () => {
	const js_with_header_editor = gulp
		.src([`build/${pkg.name}-editor.min.js`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/js/#header", "utf8"), {
				pkg: pkg
			})
		);
	const js_with_header_customizer = gulp
		.src([`build/${pkg.name}-customizer.min.js`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/js/#header", "utf8"), {
				pkg: pkg
			})
		);
	const js_with_header_customizer_preview = gulp
		.src([`build/${pkg.name}-customizer-preview.min.js`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/js/#header", "utf8"), {
				pkg: pkg
			})
		);

	const css_with_header_editor = gulp
		.src([`build/${pkg.name}-editor.min.css`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/css/#header", "utf8"), {
				pkg: pkg
			})
		);
	const css_with_header_customizer = gulp
		.src([`build/${pkg.name}-customizer.min.css`], { base: "../" })
		.pipe(
			header(fs.readFileSync("./src/css/#header", "utf8"), {
				pkg: pkg
			})
		);

	const without_dev = gulp
		.src([`${pkg.name}.php`], { base: "../" })
		.pipe(replace(/\n\/\/\sDEV_start(.|\n)*?\/\/\sDEV_end/, ""))
		.pipe(replace(/\n\/\/\sPRO_start(.|\n)*?\/\/\sPRO_end/, ""));

	const renamed = merge2(
		js_with_header_editor,
		js_with_header_customizer,
		js_with_header_customizer_preview,
		css_with_header_editor,
		css_with_header_customizer
	).pipe(
		rename(path => {
			path.basename = path.basename.replace(".min", "");
		})
	);

	return merge2(
		renamed,
		gulp.src(
			[
				"**",
				"!.*",
				"!.*/**",
				"!node_modules/**",
				"!documentation/**",
				"!pro/**",
				"!_extras/**",
				"!gulp*",
				"!yarn*",
				"!src/**",
				"!package*",
				"!build/*",
				"!inc/_test-back.php",
				"!inc/_test-front.php",
				`${pkg.name}.php`
			],
			{ base: "../" }
		),
		without_dev
	)
		.pipe(zip(`${pkg.name}-${pkg.version}.zip`))
		.pipe(gulp.dest("_extras/releases"));
});

gulp.task("release", gulp.series("parcel", "version", "zip"));
