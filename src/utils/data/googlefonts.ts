import { __ } from "@wordpress/i18n";

interface FontVariantObj {
	value: FontVariant;
	label: string;
}

export const variants: FontVariantObj[] = [
	{ value: "100", label: __("thin 100") },
	{ value: "100i", label: __("thin 100 Italic") },
	{ value: "200", label: __("extra-light 200") },
	{ value: "200i", label: __("extra-light 200 Italic") },
	{ value: "300", label: __("light 300") },
	{ value: "300i", label: __("light 300 Italic") },
	{ value: "400", label: __("regular 400") },
	{ value: "400i", label: __("regular 400 Italic") },
	{ value: "500", label: __("medium 500") },
	{ value: "500i", label: __("medium 500 Italic") },
	{ value: "600", label: __("semi-bold 600") },
	{ value: "600i", label: __("semi-bold 600 Italic") },
	{ value: "700", label: __("bold 700") },
	{ value: "700i", label: __("bold 700 Italic") },
	{ value: "800", label: __("extra-bold 800") },
	{ value: "800i", label: __("extra-bold 800 Italic") },
	{ value: "900", label: __("black 900") },
	{ value: "900i", label: __("black 900 Italic") }
];

export const fonts: Fonts = {
	ABeeZee: {
		family: "ABeeZee",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Abel: {
		family: "Abel",
		subsets: ["latin"],
		variants: ["400"]
	},
	Abhaya_Libre: {
		family: "Abhaya Libre",
		subsets: ["latin", "latin-ext", "sinhala"],
		variants: ["400", "500", "600", "700", "800"]
	},
	Abril_Fatface: {
		family: "Abril Fatface",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Aclonica: {
		family: "Aclonica",
		subsets: ["latin"],
		variants: ["400"]
	},
	Acme: {
		family: "Acme",
		subsets: ["latin"],
		variants: ["400"]
	},
	Actor: {
		family: "Actor",
		subsets: ["latin"],
		variants: ["400"]
	},
	Adamina: {
		family: "Adamina",
		subsets: ["latin"],
		variants: ["400"]
	},
	Advent_Pro: {
		family: "Advent Pro",
		subsets: ["latin", "latin-ext", "greek"],
		variants: ["100", "200", "300", "400", "500", "600", "700"]
	},
	Aguafina_Script: {
		family: "Aguafina Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Akronim: {
		family: "Akronim",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Aladin: {
		family: "Aladin",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Aldrich: {
		family: "Aldrich",
		subsets: ["latin"],
		variants: ["400"]
	},
	Alef: {
		family: "Alef",
		subsets: ["hebrew", "latin"],
		variants: ["400", "700"]
	},
	Alegreya: {
		family: "Alegreya",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Alegreya_SC: {
		family: "Alegreya SC",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Alegreya_Sans: {
		family: "Alegreya Sans",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Alegreya_Sans_SC: {
		family: "Alegreya Sans SC",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Aleo: {
		family: "Aleo",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "300i", "400", "400i", "700", "700i"]
	},
	Alex_Brush: {
		family: "Alex Brush",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Alfa_Slab_One: {
		family: "Alfa Slab One",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Alice: {
		family: "Alice",
		subsets: ["cyrillic-ext", "cyrillic", "latin"],
		variants: ["400"]
	},
	Alike: {
		family: "Alike",
		subsets: ["latin"],
		variants: ["400"]
	},
	Alike_Angular: {
		family: "Alike Angular",
		subsets: ["latin"],
		variants: ["400"]
	},
	Allan: {
		family: "Allan",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Allerta: {
		family: "Allerta",
		subsets: ["latin"],
		variants: ["400"]
	},
	Allerta_Stencil: {
		family: "Allerta Stencil",
		subsets: ["latin"],
		variants: ["400"]
	},
	Allura: {
		family: "Allura",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Almarai: {
		family: "Almarai",
		subsets: ["arabic"],
		variants: ["300", "400", "700", "800"]
	},
	Almendra: {
		family: "Almendra",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Almendra_Display: {
		family: "Almendra Display",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Almendra_SC: {
		family: "Almendra SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	Amarante: {
		family: "Amarante",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Amaranth: {
		family: "Amaranth",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Amatic_SC: {
		family: "Amatic SC",
		subsets: ["cyrillic", "hebrew", "latin", "latin-ext", "vietnamese"],
		variants: ["400", "700"]
	},
	Amethysta: {
		family: "Amethysta",
		subsets: ["latin"],
		variants: ["400"]
	},
	Amiko: {
		family: "Amiko",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "600", "700"]
	},
	Amiri: {
		family: "Amiri",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Amita: {
		family: "Amita",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Anaheim: {
		family: "Anaheim",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Andada: {
		family: "Andada",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Andika: {
		family: "Andika",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Angkor: {
		family: "Angkor",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Annie_Use_Your_Telescope: {
		family: "Annie Use Your Telescope",
		subsets: ["latin"],
		variants: ["400"]
	},
	Anonymous_Pro: {
		family: "Anonymous Pro",
		subsets: ["cyrillic", "latin", "latin-ext", "greek"],
		variants: ["400", "400i", "700", "700i"]
	},
	Antic: {
		family: "Antic",
		subsets: ["latin"],
		variants: ["400"]
	},
	Antic_Didone: {
		family: "Antic Didone",
		subsets: ["latin"],
		variants: ["400"]
	},
	Antic_Slab: {
		family: "Antic Slab",
		subsets: ["latin"],
		variants: ["400"]
	},
	Anton: {
		family: "Anton",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Arapey: {
		family: "Arapey",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Arbutus: {
		family: "Arbutus",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Arbutus_Slab: {
		family: "Arbutus Slab",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Architects_Daughter: {
		family: "Architects Daughter",
		subsets: ["latin"],
		variants: ["400"]
	},
	Archivo: {
		family: "Archivo",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Archivo_Black: {
		family: "Archivo Black",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Archivo_Narrow: {
		family: "Archivo Narrow",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Aref_Ruqaa: {
		family: "Aref Ruqaa",
		subsets: ["arabic", "latin"],
		variants: ["400", "700"]
	},
	Arima_Madurai: {
		family: "Arima Madurai",
		subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
		variants: ["100", "200", "300", "400", "500", "700", "800", "900"]
	},
	Arimo: {
		family: "Arimo",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"hebrew",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Arizonia: {
		family: "Arizonia",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Armata: {
		family: "Armata",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Arsenal: {
		family: "Arsenal",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Artifika: {
		family: "Artifika",
		subsets: ["latin"],
		variants: ["400"]
	},
	Arvo: {
		family: "Arvo",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Arya: {
		family: "Arya",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Asap: {
		family: "Asap",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Asap_Condensed: {
		family: "Asap Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Asar: {
		family: "Asar",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Asset: {
		family: "Asset",
		subsets: ["latin"],
		variants: ["400"]
	},
	Assistant: {
		family: "Assistant",
		subsets: ["hebrew", "latin"],
		variants: ["200", "300", "400", "600", "700", "800"]
	},
	Astloch: {
		family: "Astloch",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Asul: {
		family: "Asul",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Athiti: {
		family: "Athiti",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["200", "300", "400", "500", "600", "700"]
	},
	Atma: {
		family: "Atma",
		subsets: ["latin", "latin-ext", "bengali"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Atomic_Age: {
		family: "Atomic Age",
		subsets: ["latin"],
		variants: ["400"]
	},
	Aubrey: {
		family: "Aubrey",
		subsets: ["latin"],
		variants: ["400"]
	},
	Audiowide: {
		family: "Audiowide",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Autour_One: {
		family: "Autour One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Average: {
		family: "Average",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Average_Sans: {
		family: "Average Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Averia_Gruesa_Libre: {
		family: "Averia Gruesa Libre",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Averia_Libre: {
		family: "Averia Libre",
		subsets: ["latin"],
		variants: ["300", "300i", "400", "400i", "700", "700i"]
	},
	Averia_Sans_Libre: {
		family: "Averia Sans Libre",
		subsets: ["latin"],
		variants: ["300", "300i", "400", "400i", "700", "700i"]
	},
	Averia_Serif_Libre: {
		family: "Averia Serif Libre",
		subsets: ["latin"],
		variants: ["300", "300i", "400", "400i", "700", "700i"]
	},
	B612: {
		family: "B612",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	B612_Mono: {
		family: "B612 Mono",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Bad_Script: {
		family: "Bad Script",
		subsets: ["cyrillic", "latin"],
		variants: ["400"]
	},
	Bahiana: {
		family: "Bahiana",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Bahianita: {
		family: "Bahianita",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Bai_Jamjuree: {
		family: "Bai Jamjuree",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Baloo: {
		family: "Baloo",
		subsets: ["devanagari", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Bhai: {
		family: "Baloo Bhai",
		subsets: ["gujarati", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Bhaijaan: {
		family: "Baloo Bhaijaan",
		subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Bhaina: {
		family: "Baloo Bhaina",
		subsets: ["oriya", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Chettan: {
		family: "Baloo Chettan",
		subsets: ["latin", "latin-ext", "vietnamese", "malayalam"],
		variants: ["400"]
	},
	Baloo_Da: {
		family: "Baloo Da",
		subsets: ["latin", "latin-ext", "vietnamese", "bengali"],
		variants: ["400"]
	},
	Baloo_Paaji: {
		family: "Baloo Paaji",
		subsets: ["gurmukhi", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Tamma: {
		family: "Baloo Tamma",
		subsets: ["latin", "kannada", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Baloo_Tammudu: {
		family: "Baloo Tammudu",
		subsets: ["latin", "latin-ext", "vietnamese", "telugu"],
		variants: ["400"]
	},
	Baloo_Thambi: {
		family: "Baloo Thambi",
		subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Balthazar: {
		family: "Balthazar",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bangers: {
		family: "Bangers",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Barlow: {
		family: "Barlow",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Barlow_Condensed: {
		family: "Barlow Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Barlow_Semi_Condensed: {
		family: "Barlow Semi Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Barriecito: {
		family: "Barriecito",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Barrio: {
		family: "Barrio",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Basic: {
		family: "Basic",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Battambang: {
		family: "Battambang",
		subsets: ["khmer"],
		variants: ["400", "700"]
	},
	Baumans: {
		family: "Baumans",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bayon: {
		family: "Bayon",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Be_Vietnam: {
		family: "Be Vietnam",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Belgrano: {
		family: "Belgrano",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bellefair: {
		family: "Bellefair",
		subsets: ["hebrew", "latin", "latin-ext"],
		variants: ["400"]
	},
	Belleza: {
		family: "Belleza",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	BenchNine: {
		family: "BenchNine",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "700"]
	},
	Bentham: {
		family: "Bentham",
		subsets: ["latin"],
		variants: ["400"]
	},
	Berkshire_Swash: {
		family: "Berkshire Swash",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Beth_Ellen: {
		family: "Beth Ellen",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bevan: {
		family: "Bevan",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Big_Shoulders_Display: {
		family: "Big Shoulders Display",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["100", "300", "400", "500", "600", "700", "800", "900"]
	},
	Big_Shoulders_Text: {
		family: "Big Shoulders Text",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["100", "300", "400", "500", "600", "700", "800", "900"]
	},
	Bigelow_Rules: {
		family: "Bigelow Rules",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Bigshot_One: {
		family: "Bigshot One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bilbo: {
		family: "Bilbo",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Bilbo_Swash_Caps: {
		family: "Bilbo Swash Caps",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	BioRhyme: {
		family: "BioRhyme",
		subsets: ["latin", "latin-ext"],
		variants: ["200", "300", "400", "700", "800"]
	},
	BioRhyme_Expanded: {
		family: "BioRhyme Expanded",
		subsets: ["latin", "latin-ext"],
		variants: ["200", "300", "400", "700", "800"]
	},
	Biryani: {
		family: "Biryani",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["200", "300", "400", "600", "700", "800", "900"]
	},
	Bitter: {
		family: "Bitter",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700"]
	},
	Black_And_White_Picture: {
		family: "Black And White Picture",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Black_Han_Sans: {
		family: "Black Han Sans",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Black_Ops_One: {
		family: "Black Ops One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Blinker: {
		family: "Blinker",
		subsets: ["latin", "latin-ext"],
		variants: ["100", "200", "300", "400", "600", "700", "800", "900"]
	},
	Bokor: {
		family: "Bokor",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Bonbon: {
		family: "Bonbon",
		subsets: ["latin"],
		variants: ["400"]
	},
	Boogaloo: {
		family: "Boogaloo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bowlby_One: {
		family: "Bowlby One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bowlby_One_SC: {
		family: "Bowlby One SC",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Brawler: {
		family: "Brawler",
		subsets: ["latin"],
		variants: ["400"]
	},
	Bree_Serif: {
		family: "Bree Serif",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Bubblegum_Sans: {
		family: "Bubblegum Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Bubbler_One: {
		family: "Bubbler One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Buda: {
		family: "Buda",
		subsets: ["latin"],
		variants: ["300"]
	},
	Buenard: {
		family: "Buenard",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Bungee: {
		family: "Bungee",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Bungee_Hairline: {
		family: "Bungee Hairline",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Bungee_Inline: {
		family: "Bungee Inline",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Bungee_Outline: {
		family: "Bungee Outline",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Bungee_Shade: {
		family: "Bungee Shade",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Butcherman: {
		family: "Butcherman",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Butterfly_Kids: {
		family: "Butterfly Kids",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cabin: {
		family: "Cabin",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Cabin_Condensed: {
		family: "Cabin Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "500", "600", "700"]
	},
	Cabin_Sketch: {
		family: "Cabin Sketch",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Caesar_Dressing: {
		family: "Caesar Dressing",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cagliostro: {
		family: "Cagliostro",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cairo: {
		family: "Cairo",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["200", "300", "400", "600", "700", "900"]
	},
	Calligraffitti: {
		family: "Calligraffitti",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cambay: {
		family: "Cambay",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Cambo: {
		family: "Cambo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Candal: {
		family: "Candal",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cantarell: {
		family: "Cantarell",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Cantata_One: {
		family: "Cantata One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cantora_One: {
		family: "Cantora One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Capriola: {
		family: "Capriola",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cardo: {
		family: "Cardo",
		subsets: ["greek-ext", "latin", "latin-ext", "greek"],
		variants: ["400", "400i", "700"]
	},
	Carme: {
		family: "Carme",
		subsets: ["latin"],
		variants: ["400"]
	},
	Carrois_Gothic: {
		family: "Carrois Gothic",
		subsets: ["latin"],
		variants: ["400"]
	},
	Carrois_Gothic_SC: {
		family: "Carrois Gothic SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	Carter_One: {
		family: "Carter One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Catamaran: {
		family: "Catamaran",
		subsets: ["latin", "tamil", "latin-ext"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Caudex: {
		family: "Caudex",
		subsets: ["greek-ext", "latin", "latin-ext", "greek"],
		variants: ["400", "400i", "700", "700i"]
	},
	Caveat: {
		family: "Caveat",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Caveat_Brush: {
		family: "Caveat Brush",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cedarville_Cursive: {
		family: "Cedarville Cursive",
		subsets: ["latin"],
		variants: ["400"]
	},
	Ceviche_One: {
		family: "Ceviche One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Chakra_Petch: {
		family: "Chakra Petch",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Changa: {
		family: "Changa",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Changa_One: {
		family: "Changa One",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Chango: {
		family: "Chango",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Charm: {
		family: "Charm",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400", "700"]
	},
	Charmonman: {
		family: "Charmonman",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400", "700"]
	},
	Chathura: {
		family: "Chathura",
		subsets: ["latin", "telugu"],
		variants: ["100", "300", "400", "700", "800"]
	},
	Chau_Philomene_One: {
		family: "Chau Philomene One",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Chela_One: {
		family: "Chela One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Chelsea_Market: {
		family: "Chelsea Market",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Chenla: {
		family: "Chenla",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Cherry_Cream_Soda: {
		family: "Cherry Cream Soda",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cherry_Swash: {
		family: "Cherry Swash",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Chewy: {
		family: "Chewy",
		subsets: ["latin"],
		variants: ["400"]
	},
	Chicle: {
		family: "Chicle",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Chilanka: {
		family: "Chilanka",
		subsets: ["latin", "malayalam"],
		variants: ["400"]
	},
	Chivo: {
		family: "Chivo",
		subsets: ["latin", "latin-ext"],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Chonburi: {
		family: "Chonburi",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400"]
	},
	Cinzel: {
		family: "Cinzel",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700", "900"]
	},
	Cinzel_Decorative: {
		family: "Cinzel Decorative",
		subsets: ["latin"],
		variants: ["400", "700", "900"]
	},
	Clicker_Script: {
		family: "Clicker Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Coda: {
		family: "Coda",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "800"]
	},
	Coda_Caption: {
		family: "Coda Caption",
		subsets: ["latin", "latin-ext"],
		variants: ["800"]
	},
	Codystar: {
		family: "Codystar",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400"]
	},
	Coiny: {
		family: "Coiny",
		subsets: ["latin", "tamil", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Combo: {
		family: "Combo",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Comfortaa: {
		family: "Comfortaa",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["300", "400", "500", "600", "700"]
	},
	Coming_Soon: {
		family: "Coming Soon",
		subsets: ["latin"],
		variants: ["400"]
	},
	Concert_One: {
		family: "Concert One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Condiment: {
		family: "Condiment",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Content: {
		family: "Content",
		subsets: ["khmer"],
		variants: ["400", "700"]
	},
	Contrail_One: {
		family: "Contrail One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Convergence: {
		family: "Convergence",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cookie: {
		family: "Cookie",
		subsets: ["latin"],
		variants: ["400"]
	},
	Copse: {
		family: "Copse",
		subsets: ["latin"],
		variants: ["400"]
	},
	Corben: {
		family: "Corben",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Cormorant: {
		family: "Cormorant",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Cormorant_Garamond: {
		family: "Cormorant Garamond",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Cormorant_Infant: {
		family: "Cormorant Infant",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Cormorant_SC: {
		family: "Cormorant SC",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["300", "400", "500", "600", "700"]
	},
	Cormorant_Unicase: {
		family: "Cormorant Unicase",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["300", "400", "500", "600", "700"]
	},
	Cormorant_Upright: {
		family: "Cormorant Upright",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Courgette: {
		family: "Courgette",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cousine: {
		family: "Cousine",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"hebrew",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Coustard: {
		family: "Coustard",
		subsets: ["latin"],
		variants: ["400", "900"]
	},
	Covered_By_Your_Grace: {
		family: "Covered By Your Grace",
		subsets: ["latin"],
		variants: ["400"]
	},
	Crafty_Girls: {
		family: "Crafty Girls",
		subsets: ["latin"],
		variants: ["400"]
	},
	Creepster: {
		family: "Creepster",
		subsets: ["latin"],
		variants: ["400"]
	},
	Crete_Round: {
		family: "Crete Round",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Crimson_Pro: {
		family: "Crimson Pro",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900",
			"200i",
			"300i",
			"400i",
			"500i",
			"600i",
			"700i",
			"800i",
			"900i"
		]
	},
	Crimson_Text: {
		family: "Crimson Text",
		subsets: ["latin"],
		variants: ["400", "400i", "600", "600i", "700", "700i"]
	},
	Croissant_One: {
		family: "Croissant One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Crushed: {
		family: "Crushed",
		subsets: ["latin"],
		variants: ["400"]
	},
	Cuprum: {
		family: "Cuprum",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Cute_Font: {
		family: "Cute Font",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Cutive: {
		family: "Cutive",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Cutive_Mono: {
		family: "Cutive Mono",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	DM_Sans: {
		family: "DM Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "500", "500i", "700", "700i"]
	},
	DM_Serif_Display: {
		family: "DM Serif Display",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	DM_Serif_Text: {
		family: "DM Serif Text",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Damion: {
		family: "Damion",
		subsets: ["latin"],
		variants: ["400"]
	},
	Dancing_Script: {
		family: "Dancing Script",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "700"]
	},
	Dangrek: {
		family: "Dangrek",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Darker_Grotesque: {
		family: "Darker Grotesque",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["300", "400", "500", "600", "700", "800", "900"]
	},
	David_Libre: {
		family: "David Libre",
		subsets: ["hebrew", "latin", "latin-ext", "vietnamese"],
		variants: ["400", "500", "700"]
	},
	Dawning_of_a_New_Day: {
		family: "Dawning of a New Day",
		subsets: ["latin"],
		variants: ["400"]
	},
	Days_One: {
		family: "Days One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Dekko: {
		family: "Dekko",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Delius: {
		family: "Delius",
		subsets: ["latin"],
		variants: ["400"]
	},
	Delius_Swash_Caps: {
		family: "Delius Swash Caps",
		subsets: ["latin"],
		variants: ["400"]
	},
	Delius_Unicase: {
		family: "Delius Unicase",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Della_Respira: {
		family: "Della Respira",
		subsets: ["latin"],
		variants: ["400"]
	},
	Denk_One: {
		family: "Denk One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Devonshire: {
		family: "Devonshire",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Dhurjati: {
		family: "Dhurjati",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Didact_Gothic: {
		family: "Didact Gothic",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["400"]
	},
	Diplomata: {
		family: "Diplomata",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Diplomata_SC: {
		family: "Diplomata SC",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Do_Hyeon: {
		family: "Do Hyeon",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Dokdo: {
		family: "Dokdo",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Domine: {
		family: "Domine",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Donegal_One: {
		family: "Donegal One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Doppio_One: {
		family: "Doppio One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Dorsa: {
		family: "Dorsa",
		subsets: ["latin"],
		variants: ["400"]
	},
	Dosis: {
		family: "Dosis",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Dr_Sugiyama: {
		family: "Dr Sugiyama",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Duru_Sans: {
		family: "Duru Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Dynalight: {
		family: "Dynalight",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	EB_Garamond: {
		family: "EB Garamond",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Eagle_Lake: {
		family: "Eagle Lake",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	East_Sea_Dokdo: {
		family: "East Sea Dokdo",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Eater: {
		family: "Eater",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Economica: {
		family: "Economica",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Eczar: {
		family: "Eczar",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "500", "600", "700", "800"]
	},
	El_Messiri: {
		family: "El Messiri",
		subsets: ["cyrillic", "arabic", "latin"],
		variants: ["400", "500", "600", "700"]
	},
	Electrolize: {
		family: "Electrolize",
		subsets: ["latin"],
		variants: ["400"]
	},
	Elsie: {
		family: "Elsie",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "900"]
	},
	Elsie_Swash_Caps: {
		family: "Elsie Swash Caps",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "900"]
	},
	Emblema_One: {
		family: "Emblema One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Emilys_Candy: {
		family: "Emilys Candy",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Encode_Sans: {
		family: "Encode Sans",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Encode_Sans_Condensed: {
		family: "Encode Sans Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Encode_Sans_Expanded: {
		family: "Encode Sans Expanded",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Encode_Sans_Semi_Condensed: {
		family: "Encode Sans Semi Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Encode_Sans_Semi_Expanded: {
		family: "Encode Sans Semi Expanded",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Engagement: {
		family: "Engagement",
		subsets: ["latin"],
		variants: ["400"]
	},
	Englebert: {
		family: "Englebert",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Enriqueta: {
		family: "Enriqueta",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "500", "600", "700"]
	},
	Erica_One: {
		family: "Erica One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Esteban: {
		family: "Esteban",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Euphoria_Script: {
		family: "Euphoria Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ewert: {
		family: "Ewert",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Exo: {
		family: "Exo",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Exo_2: {
		family: "Exo 2",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Expletus_Sans: {
		family: "Expletus Sans",
		subsets: ["latin"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Fahkwang: {
		family: "Fahkwang",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Fanwood_Text: {
		family: "Fanwood Text",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Farro: {
		family: "Farro",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "500", "700"]
	},
	Farsan: {
		family: "Farsan",
		subsets: ["gujarati", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Fascinate: {
		family: "Fascinate",
		subsets: ["latin"],
		variants: ["400"]
	},
	Fascinate_Inline: {
		family: "Fascinate Inline",
		subsets: ["latin"],
		variants: ["400"]
	},
	Faster_One: {
		family: "Faster One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Fasthand: {
		family: "Fasthand",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Fauna_One: {
		family: "Fauna One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Faustina: {
		family: "Faustina",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Federant: {
		family: "Federant",
		subsets: ["latin"],
		variants: ["400"]
	},
	Federo: {
		family: "Federo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Felipa: {
		family: "Felipa",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fenix: {
		family: "Fenix",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Finger_Paint: {
		family: "Finger Paint",
		subsets: ["latin"],
		variants: ["400"]
	},
	Fira_Code: {
		family: "Fira Code",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["300", "400", "500", "600", "700"]
	},
	Fira_Mono: {
		family: "Fira Mono",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["400", "500", "700"]
	},
	Fira_Sans: {
		family: "Fira Sans",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Fira_Sans_Condensed: {
		family: "Fira Sans Condensed",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Fira_Sans_Extra_Condensed: {
		family: "Fira Sans Extra Condensed",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Fjalla_One: {
		family: "Fjalla One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fjord_One: {
		family: "Fjord One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Flamenco: {
		family: "Flamenco",
		subsets: ["latin"],
		variants: ["300", "400"]
	},
	Flavors: {
		family: "Flavors",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fondamento: {
		family: "Fondamento",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Fontdiner_Swanky: {
		family: "Fontdiner Swanky",
		subsets: ["latin"],
		variants: ["400"]
	},
	Forum: {
		family: "Forum",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Francois_One: {
		family: "Francois One",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Frank_Ruhl_Libre: {
		family: "Frank Ruhl Libre",
		subsets: ["hebrew", "latin", "latin-ext"],
		variants: ["300", "400", "500", "700", "900"]
	},
	Freckle_Face: {
		family: "Freckle Face",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fredericka_the_Great: {
		family: "Fredericka the Great",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fredoka_One: {
		family: "Fredoka One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Freehand: {
		family: "Freehand",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Fresca: {
		family: "Fresca",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Frijole: {
		family: "Frijole",
		subsets: ["latin"],
		variants: ["400"]
	},
	Fruktur: {
		family: "Fruktur",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Fugaz_One: {
		family: "Fugaz One",
		subsets: ["latin"],
		variants: ["400"]
	},
	GFS_Didot: {
		family: "GFS Didot",
		subsets: ["greek"],
		variants: ["400"]
	},
	GFS_Neohellenic: {
		family: "GFS Neohellenic",
		subsets: ["greek"],
		variants: ["400", "400i", "700", "700i"]
	},
	Gabriela: {
		family: "Gabriela",
		subsets: ["cyrillic-ext", "cyrillic", "latin"],
		variants: ["400"]
	},
	Gaegu: {
		family: "Gaegu",
		subsets: ["latin", "korean"],
		variants: ["300", "400", "700"]
	},
	Gafata: {
		family: "Gafata",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Galada: {
		family: "Galada",
		subsets: ["latin", "bengali"],
		variants: ["400"]
	},
	Galdeano: {
		family: "Galdeano",
		subsets: ["latin"],
		variants: ["400"]
	},
	Galindo: {
		family: "Galindo",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Gamja_Flower: {
		family: "Gamja Flower",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Gayathri: {
		family: "Gayathri",
		subsets: ["latin", "malayalam"],
		variants: ["100", "400", "700"]
	},
	Gentium_Basic: {
		family: "Gentium Basic",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Gentium_Book_Basic: {
		family: "Gentium Book Basic",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Geo: {
		family: "Geo",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Geostar: {
		family: "Geostar",
		subsets: ["latin"],
		variants: ["400"]
	},
	Geostar_Fill: {
		family: "Geostar Fill",
		subsets: ["latin"],
		variants: ["400"]
	},
	Germania_One: {
		family: "Germania One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Gidugu: {
		family: "Gidugu",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Gilda_Display: {
		family: "Gilda Display",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Give_You_Glory: {
		family: "Give You Glory",
		subsets: ["latin"],
		variants: ["400"]
	},
	Glass_Antiqua: {
		family: "Glass Antiqua",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Glegoo: {
		family: "Glegoo",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Gloria_Hallelujah: {
		family: "Gloria Hallelujah",
		subsets: ["latin"],
		variants: ["400"]
	},
	Goblin_One: {
		family: "Goblin One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Gochi_Hand: {
		family: "Gochi Hand",
		subsets: ["latin"],
		variants: ["400"]
	},
	Gorditas: {
		family: "Gorditas",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Gothic_A1: {
		family: "Gothic A1",
		subsets: ["latin", "korean"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Goudy_Bookletter_1911: {
		family: "Goudy Bookletter 1911",
		subsets: ["latin"],
		variants: ["400"]
	},
	Graduate: {
		family: "Graduate",
		subsets: ["latin"],
		variants: ["400"]
	},
	Grand_Hotel: {
		family: "Grand Hotel",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Gravitas_One: {
		family: "Gravitas One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Great_Vibes: {
		family: "Great Vibes",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Grenze: {
		family: "Grenze",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Griffy: {
		family: "Griffy",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Gruppo: {
		family: "Gruppo",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Gudea: {
		family: "Gudea",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700"]
	},
	Gugi: {
		family: "Gugi",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Gurajada: {
		family: "Gurajada",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Habibi: {
		family: "Habibi",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Halant: {
		family: "Halant",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Hammersmith_One: {
		family: "Hammersmith One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Hanalei: {
		family: "Hanalei",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Hanalei_Fill: {
		family: "Hanalei Fill",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Handlee: {
		family: "Handlee",
		subsets: ["latin"],
		variants: ["400"]
	},
	Hanuman: {
		family: "Hanuman",
		subsets: ["khmer"],
		variants: ["400", "700"]
	},
	Happy_Monkey: {
		family: "Happy Monkey",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Harmattan: {
		family: "Harmattan",
		subsets: ["arabic", "latin"],
		variants: ["400"]
	},
	Headland_One: {
		family: "Headland One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Heebo: {
		family: "Heebo",
		subsets: ["hebrew", "latin"],
		variants: ["100", "300", "400", "500", "700", "800", "900"]
	},
	Henny_Penny: {
		family: "Henny Penny",
		subsets: ["latin"],
		variants: ["400"]
	},
	Hepta_Slab: {
		family: "Hepta Slab",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Herr_Von_Muellerhoff: {
		family: "Herr Von Muellerhoff",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Hi_Melody: {
		family: "Hi Melody",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Hind: {
		family: "Hind",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Hind_Guntur: {
		family: "Hind Guntur",
		subsets: ["latin", "latin-ext", "telugu"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Hind_Madurai: {
		family: "Hind Madurai",
		subsets: ["latin", "tamil", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Hind_Siliguri: {
		family: "Hind Siliguri",
		subsets: ["latin", "latin-ext", "bengali"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Hind_Vadodara: {
		family: "Hind Vadodara",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Holtwood_One_SC: {
		family: "Holtwood One SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	Homemade_Apple: {
		family: "Homemade Apple",
		subsets: ["latin"],
		variants: ["400"]
	},
	Homenaje: {
		family: "Homenaje",
		subsets: ["latin"],
		variants: ["400"]
	},
	IBM_Plex_Mono: {
		family: "IBM Plex Mono",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	IBM_Plex_Sans: {
		family: "IBM Plex Sans",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	IBM_Plex_Sans_Condensed: {
		family: "IBM Plex Sans Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	IBM_Plex_Serif: {
		family: "IBM Plex Serif",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	IM_Fell_DW_Pica: {
		family: "IM Fell DW Pica",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	IM_Fell_DW_Pica_SC: {
		family: "IM Fell DW Pica SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	IM_Fell_Double_Pica: {
		family: "IM Fell Double Pica",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	IM_Fell_Double_Pica_SC: {
		family: "IM Fell Double Pica SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	IM_Fell_English: {
		family: "IM Fell English",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	IM_Fell_English_SC: {
		family: "IM Fell English SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	IM_Fell_French_Canon: {
		family: "IM Fell French Canon",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	IM_Fell_French_Canon_SC: {
		family: "IM Fell French Canon SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	IM_Fell_Great_Primer: {
		family: "IM Fell Great Primer",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	IM_Fell_Great_Primer_SC: {
		family: "IM Fell Great Primer SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	Iceberg: {
		family: "Iceberg",
		subsets: ["latin"],
		variants: ["400"]
	},
	Iceland: {
		family: "Iceland",
		subsets: ["latin"],
		variants: ["400"]
	},
	Imprima: {
		family: "Imprima",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Inconsolata: {
		family: "Inconsolata",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "700"]
	},
	Inder: {
		family: "Inder",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Indie_Flower: {
		family: "Indie Flower",
		subsets: ["latin"],
		variants: ["400"]
	},
	Inika: {
		family: "Inika",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Inknut_Antiqua: {
		family: "Inknut Antiqua",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700", "800", "900"]
	},
	Irish_Grover: {
		family: "Irish Grover",
		subsets: ["latin"],
		variants: ["400"]
	},
	Istok_Web: {
		family: "Istok Web",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Italiana: {
		family: "Italiana",
		subsets: ["latin"],
		variants: ["400"]
	},
	Italianno: {
		family: "Italianno",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Itim: {
		family: "Itim",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400"]
	},
	Jacques_Francois: {
		family: "Jacques Francois",
		subsets: ["latin"],
		variants: ["400"]
	},
	Jacques_Francois_Shadow: {
		family: "Jacques Francois Shadow",
		subsets: ["latin"],
		variants: ["400"]
	},
	Jaldi: {
		family: "Jaldi",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Jim_Nightshade: {
		family: "Jim Nightshade",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Jockey_One: {
		family: "Jockey One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Jolly_Lodger: {
		family: "Jolly Lodger",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Jomhuria: {
		family: "Jomhuria",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Josefin_Sans: {
		family: "Josefin Sans",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Josefin_Slab: {
		family: "Josefin Slab",
		subsets: ["latin"],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Joti_One: {
		family: "Joti One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Jua: {
		family: "Jua",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Judson: {
		family: "Judson",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "400i", "700"]
	},
	Julee: {
		family: "Julee",
		subsets: ["latin"],
		variants: ["400"]
	},
	Julius_Sans_One: {
		family: "Julius Sans One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Junge: {
		family: "Junge",
		subsets: ["latin"],
		variants: ["400"]
	},
	Jura: {
		family: "Jura",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["300", "400", "500", "600", "700"]
	},
	Just_Another_Hand: {
		family: "Just Another Hand",
		subsets: ["latin"],
		variants: ["400"]
	},
	Just_Me_Again_Down_Here: {
		family: "Just Me Again Down Here",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	K2D: {
		family: "K2D",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Kadwa: {
		family: "Kadwa",
		subsets: ["devanagari", "latin"],
		variants: ["400", "700"]
	},
	Kalam: {
		family: "Kalam",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "700"]
	},
	Kameron: {
		family: "Kameron",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Kanit: {
		family: "Kanit",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Kantumruy: {
		family: "Kantumruy",
		subsets: ["khmer"],
		variants: ["300", "400", "700"]
	},
	Karla: {
		family: "Karla",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Karma: {
		family: "Karma",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Katibeh: {
		family: "Katibeh",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Kaushan_Script: {
		family: "Kaushan Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Kavivanar: {
		family: "Kavivanar",
		subsets: ["latin", "tamil", "latin-ext"],
		variants: ["400"]
	},
	Kavoon: {
		family: "Kavoon",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Kdam_Thmor: {
		family: "Kdam Thmor",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Keania_One: {
		family: "Keania One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Kelly_Slab: {
		family: "Kelly Slab",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Kenia: {
		family: "Kenia",
		subsets: ["latin"],
		variants: ["400"]
	},
	Khand: {
		family: "Khand",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Khmer: {
		family: "Khmer",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Khula: {
		family: "Khula",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "600", "700", "800"]
	},
	Kirang_Haerang: {
		family: "Kirang Haerang",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Kite_One: {
		family: "Kite One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Knewave: {
		family: "Knewave",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	KoHo: {
		family: "KoHo",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Kodchasan: {
		family: "Kodchasan",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Kosugi: {
		family: "Kosugi",
		subsets: ["cyrillic", "japanese", "latin"],
		variants: ["400"]
	},
	Kosugi_Maru: {
		family: "Kosugi Maru",
		subsets: ["cyrillic", "japanese", "latin"],
		variants: ["400"]
	},
	Kotta_One: {
		family: "Kotta One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Koulen: {
		family: "Koulen",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Kranky: {
		family: "Kranky",
		subsets: ["latin"],
		variants: ["400"]
	},
	Kreon: {
		family: "Kreon",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Kristi: {
		family: "Kristi",
		subsets: ["latin"],
		variants: ["400"]
	},
	Krona_One: {
		family: "Krona One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Krub: {
		family: "Krub",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Kumar_One: {
		family: "Kumar One",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["400"]
	},
	Kumar_One_Outline: {
		family: "Kumar One Outline",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["400"]
	},
	Kurale: {
		family: "Kurale",
		subsets: [
			"cyrillic-ext",
			"devanagari",
			"cyrillic",
			"latin",
			"latin-ext"
		],
		variants: ["400"]
	},
	La_Belle_Aurore: {
		family: "La Belle Aurore",
		subsets: ["latin"],
		variants: ["400"]
	},
	Lacquer: {
		family: "Lacquer",
		subsets: ["latin"],
		variants: ["400"]
	},
	Laila: {
		family: "Laila",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Lakki_Reddy: {
		family: "Lakki Reddy",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Lalezar: {
		family: "Lalezar",
		subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lancelot: {
		family: "Lancelot",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Lateef: {
		family: "Lateef",
		subsets: ["arabic", "latin"],
		variants: ["400"]
	},
	Lato: {
		family: "Lato",
		subsets: ["latin", "latin-ext"],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	League_Script: {
		family: "League Script",
		subsets: ["latin"],
		variants: ["400"]
	},
	Leckerli_One: {
		family: "Leckerli One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Ledger: {
		family: "Ledger",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Lekton: {
		family: "Lekton",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700"]
	},
	Lemon: {
		family: "Lemon",
		subsets: ["latin"],
		variants: ["400"]
	},
	Lemonada: {
		family: "Lemonada",
		subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
		variants: ["300", "400", "600", "700"]
	},
	Lexend_Deca: {
		family: "Lexend Deca",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Exa: {
		family: "Lexend Exa",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Giga: {
		family: "Lexend Giga",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Mega: {
		family: "Lexend Mega",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Peta: {
		family: "Lexend Peta",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Tera: {
		family: "Lexend Tera",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Lexend_Zetta: {
		family: "Lexend Zetta",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Libre_Barcode_128: {
		family: "Libre Barcode 128",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Barcode_128_Text: {
		family: "Libre Barcode 128 Text",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Barcode_39: {
		family: "Libre Barcode 39",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Barcode_39_Extended: {
		family: "Libre Barcode 39 Extended",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Barcode_39_Extended_Text: {
		family: "Libre Barcode 39 Extended Text",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Barcode_39_Text: {
		family: "Libre Barcode 39 Text",
		subsets: ["latin"],
		variants: ["400"]
	},
	Libre_Baskerville: {
		family: "Libre Baskerville",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700"]
	},
	Libre_Caslon_Display: {
		family: "Libre Caslon Display",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Libre_Caslon_Text: {
		family: "Libre Caslon Text",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700"]
	},
	Libre_Franklin: {
		family: "Libre Franklin",
		subsets: ["latin", "latin-ext"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Life_Savers: {
		family: "Life Savers",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700", "800"]
	},
	Lilita_One: {
		family: "Lilita One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Lily_Script_One: {
		family: "Lily Script One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Limelight: {
		family: "Limelight",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Linden_Hill: {
		family: "Linden Hill",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Literata: {
		family: "Literata",
		subsets: [
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"400",
			"500",
			"600",
			"700",
			"400i",
			"500i",
			"600i",
			"700i"
		]
	},
	Liu_Jian_Mao_Cao: {
		family: "Liu Jian Mao Cao",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	Livvic: {
		family: "Livvic",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Lobster: {
		family: "Lobster",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Lobster_Two: {
		family: "Lobster Two",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Londrina_Outline: {
		family: "Londrina Outline",
		subsets: ["latin"],
		variants: ["400"]
	},
	Londrina_Shadow: {
		family: "Londrina Shadow",
		subsets: ["latin"],
		variants: ["400"]
	},
	Londrina_Sketch: {
		family: "Londrina Sketch",
		subsets: ["latin"],
		variants: ["400"]
	},
	Londrina_Solid: {
		family: "Londrina Solid",
		subsets: ["latin"],
		variants: ["100", "300", "400", "900"]
	},
	Long_Cang: {
		family: "Long Cang",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	Lora: {
		family: "Lora",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Love_Ya_Like_A_Sister: {
		family: "Love Ya Like A Sister",
		subsets: ["latin"],
		variants: ["400"]
	},
	Loved_by_the_King: {
		family: "Loved by the King",
		subsets: ["latin"],
		variants: ["400"]
	},
	Lovers_Quarrel: {
		family: "Lovers Quarrel",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Luckiest_Guy: {
		family: "Luckiest Guy",
		subsets: ["latin"],
		variants: ["400"]
	},
	Lusitana: {
		family: "Lusitana",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Lustria: {
		family: "Lustria",
		subsets: ["latin"],
		variants: ["400"]
	},
	M_PLUS_1p: {
		family: "M PLUS 1p",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"hebrew",
			"japanese",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["100", "300", "400", "500", "700", "800", "900"]
	},
	M_PLUS_Rounded_1c: {
		family: "M PLUS Rounded 1c",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"hebrew",
			"japanese",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["100", "300", "400", "500", "700", "800", "900"]
	},
	Ma_Shan_Zheng: {
		family: "Ma Shan Zheng",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	Macondo: {
		family: "Macondo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Macondo_Swash_Caps: {
		family: "Macondo Swash Caps",
		subsets: ["latin"],
		variants: ["400"]
	},
	Mada: {
		family: "Mada",
		subsets: ["arabic", "latin"],
		variants: ["200", "300", "400", "500", "600", "700", "900"]
	},
	Magra: {
		family: "Magra",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Maiden_Orange: {
		family: "Maiden Orange",
		subsets: ["latin"],
		variants: ["400"]
	},
	Maitree: {
		family: "Maitree",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["200", "300", "400", "500", "600", "700"]
	},
	Major_Mono_Display: {
		family: "Major Mono Display",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Mako: {
		family: "Mako",
		subsets: ["latin"],
		variants: ["400"]
	},
	Mali: {
		family: "Mali",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Mallanna: {
		family: "Mallanna",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Mandali: {
		family: "Mandali",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Manjari: {
		family: "Manjari",
		subsets: ["latin", "malayalam"],
		variants: ["100", "400", "700"]
	},
	Mansalva: {
		family: "Mansalva",
		subsets: ["latin"],
		variants: ["400"]
	},
	Manuale: {
		family: "Manuale",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Marcellus: {
		family: "Marcellus",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Marcellus_SC: {
		family: "Marcellus SC",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Marck_Script: {
		family: "Marck Script",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Margarine: {
		family: "Margarine",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Markazi_Text: {
		family: "Markazi Text",
		subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
		variants: ["400", "500", "600", "700"]
	},
	Marko_One: {
		family: "Marko One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Marmelad: {
		family: "Marmelad",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Martel: {
		family: "Martel",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["200", "300", "400", "600", "700", "800", "900"]
	},
	Martel_Sans: {
		family: "Martel Sans",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["200", "300", "400", "600", "700", "800", "900"]
	},
	Marvel: {
		family: "Marvel",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Mate: {
		family: "Mate",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Mate_SC: {
		family: "Mate SC",
		subsets: ["latin"],
		variants: ["400"]
	},
	Maven_Pro: {
		family: "Maven Pro",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "500", "700", "900"]
	},
	McLaren: {
		family: "McLaren",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Meddon: {
		family: "Meddon",
		subsets: ["latin"],
		variants: ["400"]
	},
	MedievalSharp: {
		family: "MedievalSharp",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Medula_One: {
		family: "Medula One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Meera_Inimai: {
		family: "Meera Inimai",
		subsets: ["latin", "tamil"],
		variants: ["400"]
	},
	Megrim: {
		family: "Megrim",
		subsets: ["latin"],
		variants: ["400"]
	},
	Meie_Script: {
		family: "Meie Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Merienda: {
		family: "Merienda",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Merienda_One: {
		family: "Merienda One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Merriweather: {
		family: "Merriweather",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Merriweather_Sans: {
		family: "Merriweather Sans",
		subsets: ["latin", "latin-ext"],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Metal: {
		family: "Metal",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Metal_Mania: {
		family: "Metal Mania",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Metamorphous: {
		family: "Metamorphous",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Metrophobic: {
		family: "Metrophobic",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Michroma: {
		family: "Michroma",
		subsets: ["latin"],
		variants: ["400"]
	},
	Milonga: {
		family: "Milonga",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Miltonian: {
		family: "Miltonian",
		subsets: ["latin"],
		variants: ["400"]
	},
	Miltonian_Tattoo: {
		family: "Miltonian Tattoo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Mina: {
		family: "Mina",
		subsets: ["latin", "latin-ext", "bengali"],
		variants: ["400", "700"]
	},
	Miniver: {
		family: "Miniver",
		subsets: ["latin"],
		variants: ["400"]
	},
	Miriam_Libre: {
		family: "Miriam Libre",
		subsets: ["hebrew", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Mirza: {
		family: "Mirza",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["400", "500", "600", "700"]
	},
	Miss_Fajardose: {
		family: "Miss Fajardose",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mitr: {
		family: "Mitr",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["200", "300", "400", "500", "600", "700"]
	},
	Modak: {
		family: "Modak",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Modern_Antiqua: {
		family: "Modern Antiqua",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mogra: {
		family: "Mogra",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["400"]
	},
	Molengo: {
		family: "Molengo",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Molle: {
		family: "Molle",
		subsets: ["latin", "latin-ext"],
		variants: ["400i"]
	},
	Monda: {
		family: "Monda",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Monofett: {
		family: "Monofett",
		subsets: ["latin"],
		variants: ["400"]
	},
	Monoton: {
		family: "Monoton",
		subsets: ["latin"],
		variants: ["400"]
	},
	Monsieur_La_Doulaise: {
		family: "Monsieur La Doulaise",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Montaga: {
		family: "Montaga",
		subsets: ["latin"],
		variants: ["400"]
	},
	Montez: {
		family: "Montez",
		subsets: ["latin"],
		variants: ["400"]
	},
	Montserrat: {
		family: "Montserrat",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Montserrat_Alternates: {
		family: "Montserrat Alternates",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Montserrat_Subrayada: {
		family: "Montserrat Subrayada",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Moul: {
		family: "Moul",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Moulpali: {
		family: "Moulpali",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Mountains_of_Christmas: {
		family: "Mountains of Christmas",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Mouse_Memoirs: {
		family: "Mouse Memoirs",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mr_Bedfort: {
		family: "Mr Bedfort",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mr_Dafoe: {
		family: "Mr Dafoe",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mr_De_Haviland: {
		family: "Mr De Haviland",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mrs_Saint_Delafield: {
		family: "Mrs Saint Delafield",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mrs_Sheppards: {
		family: "Mrs Sheppards",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Mukta: {
		family: "Mukta",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Mukta_Mahee: {
		family: "Mukta Mahee",
		subsets: ["gurmukhi", "latin", "latin-ext"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Mukta_Malar: {
		family: "Mukta Malar",
		subsets: ["latin", "tamil", "latin-ext"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Mukta_Vaani: {
		family: "Mukta Vaani",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["200", "300", "400", "500", "600", "700", "800"]
	},
	Muli: {
		family: "Muli",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Mystery_Quest: {
		family: "Mystery Quest",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	NTR: {
		family: "NTR",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Nanum_Brush_Script: {
		family: "Nanum Brush Script",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Nanum_Gothic: {
		family: "Nanum Gothic",
		subsets: ["latin", "korean"],
		variants: ["400", "700", "800"]
	},
	Nanum_Gothic_Coding: {
		family: "Nanum Gothic Coding",
		subsets: ["latin", "korean"],
		variants: ["400", "700"]
	},
	Nanum_Myeongjo: {
		family: "Nanum Myeongjo",
		subsets: ["latin", "korean"],
		variants: ["400", "700", "800"]
	},
	Nanum_Pen_Script: {
		family: "Nanum Pen Script",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Neucha: {
		family: "Neucha",
		subsets: ["cyrillic", "latin"],
		variants: ["400"]
	},
	Neuton: {
		family: "Neuton",
		subsets: ["latin", "latin-ext"],
		variants: ["200", "300", "400", "400i", "700", "800"]
	},
	New_Rocker: {
		family: "New Rocker",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	News_Cycle: {
		family: "News Cycle",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Niconne: {
		family: "Niconne",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Niramit: {
		family: "Niramit",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Nixie_One: {
		family: "Nixie One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nobile: {
		family: "Nobile",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "500", "500i", "700", "700i"]
	},
	Nokora: {
		family: "Nokora",
		subsets: ["khmer"],
		variants: ["400", "700"]
	},
	Norican: {
		family: "Norican",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Nosifer: {
		family: "Nosifer",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Notable: {
		family: "Notable",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nothing_You_Could_Do: {
		family: "Nothing You Could Do",
		subsets: ["latin"],
		variants: ["400"]
	},
	Noticia_Text: {
		family: "Noticia Text",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "400i", "700", "700i"]
	},
	Noto_Sans: {
		family: "Noto Sans",
		subsets: [
			"cyrillic-ext",
			"devanagari",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Noto_Sans_HK: {
		family: "Noto Sans HK",
		subsets: ["chinese-hongkong", "latin"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Noto_Sans_JP: {
		family: "Noto Sans JP",
		subsets: ["japanese", "latin"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Noto_Sans_KR: {
		family: "Noto Sans KR",
		subsets: ["latin", "korean"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Noto_Sans_SC: {
		family: "Noto Sans SC",
		subsets: ["cyrillic", "latin", "vietnamese", "chinese-simplified"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Noto_Sans_TC: {
		family: "Noto Sans TC",
		subsets: ["chinese-traditional", "latin"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Noto_Serif: {
		family: "Noto Serif",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Noto_Serif_JP: {
		family: "Noto Serif JP",
		subsets: ["japanese", "latin"],
		variants: ["200", "300", "400", "500", "600", "700", "900"]
	},
	Noto_Serif_KR: {
		family: "Noto Serif KR",
		subsets: ["latin", "korean"],
		variants: ["200", "300", "400", "500", "600", "700", "900"]
	},
	Noto_Serif_SC: {
		family: "Noto Serif SC",
		subsets: ["cyrillic", "latin", "vietnamese", "chinese-simplified"],
		variants: ["200", "300", "400", "500", "600", "700", "900"]
	},
	Noto_Serif_TC: {
		family: "Noto Serif TC",
		subsets: ["chinese-traditional", "cyrillic", "latin", "vietnamese"],
		variants: ["200", "300", "400", "500", "600", "700", "900"]
	},
	Nova_Cut: {
		family: "Nova Cut",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Flat: {
		family: "Nova Flat",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Mono: {
		family: "Nova Mono",
		subsets: ["latin", "greek"],
		variants: ["400"]
	},
	Nova_Oval: {
		family: "Nova Oval",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Round: {
		family: "Nova Round",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Script: {
		family: "Nova Script",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Slim: {
		family: "Nova Slim",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nova_Square: {
		family: "Nova Square",
		subsets: ["latin"],
		variants: ["400"]
	},
	Numans: {
		family: "Numans",
		subsets: ["latin"],
		variants: ["400"]
	},
	Nunito: {
		family: "Nunito",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Nunito_Sans: {
		family: "Nunito Sans",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Odor_Mean_Chey: {
		family: "Odor Mean Chey",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Offside: {
		family: "Offside",
		subsets: ["latin"],
		variants: ["400"]
	},
	Old_Standard_TT: {
		family: "Old Standard TT",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "400i", "700"]
	},
	Oldenburg: {
		family: "Oldenburg",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Oleo_Script: {
		family: "Oleo Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Oleo_Script_Swash_Caps: {
		family: "Oleo Script Swash Caps",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Open_Sans: {
		family: "Open Sans",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Open_Sans_Condensed: {
		family: "Open Sans Condensed",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["300", "300i", "700"]
	},
	Oranienbaum: {
		family: "Oranienbaum",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Orbitron: {
		family: "Orbitron",
		subsets: ["latin"],
		variants: ["400", "500", "700", "900"]
	},
	Oregano: {
		family: "Oregano",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Orienta: {
		family: "Orienta",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Original_Surfer: {
		family: "Original Surfer",
		subsets: ["latin"],
		variants: ["400"]
	},
	Oswald: {
		family: "Oswald",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["200", "300", "400", "500", "600", "700"]
	},
	Over_the_Rainbow: {
		family: "Over the Rainbow",
		subsets: ["latin"],
		variants: ["400"]
	},
	Overlock: {
		family: "Overlock",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i", "900", "900i"]
	},
	Overlock_SC: {
		family: "Overlock SC",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Overpass: {
		family: "Overpass",
		subsets: ["latin", "latin-ext"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Overpass_Mono: {
		family: "Overpass Mono",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "600", "700"]
	},
	Ovo: {
		family: "Ovo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Oxygen: {
		family: "Oxygen",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "700"]
	},
	Oxygen_Mono: {
		family: "Oxygen Mono",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	PT_Mono: {
		family: "PT Mono",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	PT_Sans: {
		family: "PT Sans",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	PT_Sans_Caption: {
		family: "PT Sans Caption",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	PT_Sans_Narrow: {
		family: "PT Sans Narrow",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	PT_Serif: {
		family: "PT Serif",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	PT_Serif_Caption: {
		family: "PT Serif Caption",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Pacifico: {
		family: "Pacifico",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Padauk: {
		family: "Padauk",
		subsets: ["latin", "myanmar"],
		variants: ["400", "700"]
	},
	Palanquin: {
		family: "Palanquin",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["100", "200", "300", "400", "500", "600", "700"]
	},
	Palanquin_Dark: {
		family: "Palanquin Dark",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "500", "600", "700"]
	},
	Pangolin: {
		family: "Pangolin",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Paprika: {
		family: "Paprika",
		subsets: ["latin"],
		variants: ["400"]
	},
	Parisienne: {
		family: "Parisienne",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Passero_One: {
		family: "Passero One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Passion_One: {
		family: "Passion One",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700", "900"]
	},
	Pathway_Gothic_One: {
		family: "Pathway Gothic One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Patrick_Hand: {
		family: "Patrick Hand",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Patrick_Hand_SC: {
		family: "Patrick Hand SC",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Pattaya: {
		family: "Pattaya",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400"]
	},
	Patua_One: {
		family: "Patua One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Pavanam: {
		family: "Pavanam",
		subsets: ["latin", "tamil", "latin-ext"],
		variants: ["400"]
	},
	Paytone_One: {
		family: "Paytone One",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Peddana: {
		family: "Peddana",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Peralta: {
		family: "Peralta",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Permanent_Marker: {
		family: "Permanent Marker",
		subsets: ["latin"],
		variants: ["400"]
	},
	Petit_Formal_Script: {
		family: "Petit Formal Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Petrona: {
		family: "Petrona",
		subsets: ["latin"],
		variants: ["400"]
	},
	Philosopher: {
		family: "Philosopher",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "vietnamese"],
		variants: ["400", "400i", "700", "700i"]
	},
	Piedra: {
		family: "Piedra",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Pinyon_Script: {
		family: "Pinyon Script",
		subsets: ["latin"],
		variants: ["400"]
	},
	Pirata_One: {
		family: "Pirata One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Plaster: {
		family: "Plaster",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Play: {
		family: "Play",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "700"]
	},
	Playball: {
		family: "Playball",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Playfair_Display: {
		family: "Playfair Display",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
		variants: ["400", "400i", "700", "700i", "900", "900i"]
	},
	Playfair_Display_SC: {
		family: "Playfair Display SC",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
		variants: ["400", "400i", "700", "700i", "900", "900i"]
	},
	Podkova: {
		family: "Podkova",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "500", "600", "700", "800"]
	},
	Poiret_One: {
		family: "Poiret One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Poller_One: {
		family: "Poller One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Poly: {
		family: "Poly",
		subsets: ["latin"],
		variants: ["400", "400i"]
	},
	Pompiere: {
		family: "Pompiere",
		subsets: ["latin"],
		variants: ["400"]
	},
	Pontano_Sans: {
		family: "Pontano Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Poor_Story: {
		family: "Poor Story",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Poppins: {
		family: "Poppins",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Port_Lligat_Sans: {
		family: "Port Lligat Sans",
		subsets: ["latin"],
		variants: ["400"]
	},
	Port_Lligat_Slab: {
		family: "Port Lligat Slab",
		subsets: ["latin"],
		variants: ["400"]
	},
	Pragati_Narrow: {
		family: "Pragati Narrow",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Prata: {
		family: "Prata",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "vietnamese"],
		variants: ["400"]
	},
	Preahvihear: {
		family: "Preahvihear",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Press_Start_2P: {
		family: "Press Start 2P",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["400"]
	},
	Pridi: {
		family: "Pridi",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["200", "300", "400", "500", "600", "700"]
	},
	Princess_Sofia: {
		family: "Princess Sofia",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Prociono: {
		family: "Prociono",
		subsets: ["latin"],
		variants: ["400"]
	},
	Prompt: {
		family: "Prompt",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Prosto_One: {
		family: "Prosto One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Proza_Libre: {
		family: "Proza Libre",
		subsets: ["latin", "latin-ext"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Puritan: {
		family: "Puritan",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Purple_Purse: {
		family: "Purple Purse",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Quando: {
		family: "Quando",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Quantico: {
		family: "Quantico",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Quattrocento: {
		family: "Quattrocento",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Quattrocento_Sans: {
		family: "Quattrocento Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Questrial: {
		family: "Questrial",
		subsets: ["latin"],
		variants: ["400"]
	},
	Quicksand: {
		family: "Quicksand",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Quintessential: {
		family: "Quintessential",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Qwigley: {
		family: "Qwigley",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Racing_Sans_One: {
		family: "Racing Sans One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Radley: {
		family: "Radley",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Rajdhani: {
		family: "Rajdhani",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Rakkas: {
		family: "Rakkas",
		subsets: ["arabic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Raleway: {
		family: "Raleway",
		subsets: ["latin", "latin-ext"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Raleway_Dots: {
		family: "Raleway Dots",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ramabhadra: {
		family: "Ramabhadra",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Ramaraja: {
		family: "Ramaraja",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Rambla: {
		family: "Rambla",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Rammetto_One: {
		family: "Rammetto One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ranchers: {
		family: "Ranchers",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Rancho: {
		family: "Rancho",
		subsets: ["latin"],
		variants: ["400"]
	},
	Ranga: {
		family: "Ranga",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Rasa: {
		family: "Rasa",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Rationale: {
		family: "Rationale",
		subsets: ["latin"],
		variants: ["400"]
	},
	Ravi_Prakash: {
		family: "Ravi Prakash",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Red_Hat_Display: {
		family: "Red Hat Display",
		subsets: ["latin", "latin-ext"],
		variants: [
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Red_Hat_Text: {
		family: "Red Hat Text",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "500", "500i", "700", "700i"]
	},
	Redressed: {
		family: "Redressed",
		subsets: ["latin"],
		variants: ["400"]
	},
	Reem_Kufi: {
		family: "Reem Kufi",
		subsets: ["arabic", "latin"],
		variants: ["400"]
	},
	Reenie_Beanie: {
		family: "Reenie Beanie",
		subsets: ["latin"],
		variants: ["400"]
	},
	Revalia: {
		family: "Revalia",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Rhodium_Libre: {
		family: "Rhodium Libre",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Ribeye: {
		family: "Ribeye",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ribeye_Marrow: {
		family: "Ribeye Marrow",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Righteous: {
		family: "Righteous",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Risque: {
		family: "Risque",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Roboto: {
		family: "Roboto",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Roboto_Condensed: {
		family: "Roboto Condensed",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["300", "300i", "400", "400i", "700", "700i"]
	},
	Roboto_Mono: {
		family: "Roboto Mono",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"100",
			"100i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i"
		]
	},
	Roboto_Slab: {
		family: "Roboto Slab",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["100", "300", "400", "700"]
	},
	Rochester: {
		family: "Rochester",
		subsets: ["latin"],
		variants: ["400"]
	},
	Rock_Salt: {
		family: "Rock Salt",
		subsets: ["latin"],
		variants: ["400"]
	},
	Rokkitt: {
		family: "Rokkitt",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Romanesco: {
		family: "Romanesco",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ropa_Sans: {
		family: "Ropa Sans",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Rosario: {
		family: "Rosario",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Rosarivo: {
		family: "Rosarivo",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Rouge_Script: {
		family: "Rouge Script",
		subsets: ["latin"],
		variants: ["400"]
	},
	Rozha_One: {
		family: "Rozha One",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Rubik: {
		family: "Rubik",
		subsets: ["cyrillic", "hebrew", "latin", "latin-ext"],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Rubik_Mono_One: {
		family: "Rubik Mono One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Ruda: {
		family: "Ruda",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700", "900"]
	},
	Rufina: {
		family: "Rufina",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Ruge_Boogie: {
		family: "Ruge Boogie",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ruluko: {
		family: "Ruluko",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Rum_Raisin: {
		family: "Rum Raisin",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Ruslan_Display: {
		family: "Ruslan Display",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Russo_One: {
		family: "Russo One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Ruthie: {
		family: "Ruthie",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Rye: {
		family: "Rye",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sacramento: {
		family: "Sacramento",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sahitya: {
		family: "Sahitya",
		subsets: ["devanagari", "latin"],
		variants: ["400", "700"]
	},
	Sail: {
		family: "Sail",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Saira: {
		family: "Saira",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Saira_Condensed: {
		family: "Saira Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Saira_Extra_Condensed: {
		family: "Saira Extra Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Saira_Semi_Condensed: {
		family: "Saira Semi Condensed",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Saira_Stencil_One: {
		family: "Saira Stencil One",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Salsa: {
		family: "Salsa",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sanchez: {
		family: "Sanchez",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Sancreek: {
		family: "Sancreek",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sansita: {
		family: "Sansita",
		subsets: ["latin", "latin-ext"],
		variants: [
			"400",
			"400i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Sarabun: {
		family: "Sarabun",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Sarala: {
		family: "Sarala",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Sarina: {
		family: "Sarina",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sarpanch: {
		family: "Sarpanch",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "500", "600", "700", "800", "900"]
	},
	Satisfy: {
		family: "Satisfy",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sawarabi_Gothic: {
		family: "Sawarabi Gothic",
		subsets: [
			"cyrillic",
			"japanese",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Sawarabi_Mincho: {
		family: "Sawarabi Mincho",
		subsets: ["japanese", "latin", "latin-ext"],
		variants: ["400"]
	},
	Scada: {
		family: "Scada",
		subsets: ["cyrillic-ext", "cyrillic", "latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Scheherazade: {
		family: "Scheherazade",
		subsets: ["arabic", "latin"],
		variants: ["400", "700"]
	},
	Schoolbell: {
		family: "Schoolbell",
		subsets: ["latin"],
		variants: ["400"]
	},
	Scope_One: {
		family: "Scope One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Seaweed_Script: {
		family: "Seaweed Script",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Secular_One: {
		family: "Secular One",
		subsets: ["hebrew", "latin", "latin-ext"],
		variants: ["400"]
	},
	Sedgwick_Ave: {
		family: "Sedgwick Ave",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Sedgwick_Ave_Display: {
		family: "Sedgwick Ave Display",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Sevillana: {
		family: "Sevillana",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Seymour_One: {
		family: "Seymour One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Shadows_Into_Light: {
		family: "Shadows Into Light",
		subsets: ["latin"],
		variants: ["400"]
	},
	Shadows_Into_Light_Two: {
		family: "Shadows Into Light Two",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Shanti: {
		family: "Shanti",
		subsets: ["latin"],
		variants: ["400"]
	},
	Share: {
		family: "Share",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	Share_Tech: {
		family: "Share Tech",
		subsets: ["latin"],
		variants: ["400"]
	},
	Share_Tech_Mono: {
		family: "Share Tech Mono",
		subsets: ["latin"],
		variants: ["400"]
	},
	Shojumaru: {
		family: "Shojumaru",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Short_Stack: {
		family: "Short Stack",
		subsets: ["latin"],
		variants: ["400"]
	},
	Shrikhand: {
		family: "Shrikhand",
		subsets: ["gujarati", "latin", "latin-ext"],
		variants: ["400"]
	},
	Siemreap: {
		family: "Siemreap",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Sigmar_One: {
		family: "Sigmar One",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Signika: {
		family: "Signika",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "600", "700"]
	},
	Signika_Negative: {
		family: "Signika Negative",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "600", "700"]
	},
	Simonetta: {
		family: "Simonetta",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "900", "900i"]
	},
	Single_Day: {
		family: "Single Day",
		subsets: ["korean"],
		variants: ["400"]
	},
	Sintony: {
		family: "Sintony",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Sirin_Stencil: {
		family: "Sirin Stencil",
		subsets: ["latin"],
		variants: ["400"]
	},
	Six_Caps: {
		family: "Six Caps",
		subsets: ["latin"],
		variants: ["400"]
	},
	Skranji: {
		family: "Skranji",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Slabo_13px: {
		family: "Slabo 13px",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Slabo_27px: {
		family: "Slabo 27px",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Slackey: {
		family: "Slackey",
		subsets: ["latin"],
		variants: ["400"]
	},
	Smokum: {
		family: "Smokum",
		subsets: ["latin"],
		variants: ["400"]
	},
	Smythe: {
		family: "Smythe",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sniglet: {
		family: "Sniglet",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "800"]
	},
	Snippet: {
		family: "Snippet",
		subsets: ["latin"],
		variants: ["400"]
	},
	Snowburst_One: {
		family: "Snowburst One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sofadi_One: {
		family: "Sofadi One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sofia: {
		family: "Sofia",
		subsets: ["latin"],
		variants: ["400"]
	},
	Song_Myung: {
		family: "Song Myung",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Sonsie_One: {
		family: "Sonsie One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Sorts_Mill_Goudy: {
		family: "Sorts Mill Goudy",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i"]
	},
	Source_Code_Pro: {
		family: "Source Code Pro",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Source_Sans_Pro: {
		family: "Source Sans Pro",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Source_Serif_Pro: {
		family: "Source Serif Pro",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "600", "700"]
	},
	Space_Mono: {
		family: "Space Mono",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400", "400i", "700", "700i"]
	},
	Special_Elite: {
		family: "Special Elite",
		subsets: ["latin"],
		variants: ["400"]
	},
	Spectral: {
		family: "Spectral",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Spectral_SC: {
		family: "Spectral SC",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i"
		]
	},
	Spicy_Rice: {
		family: "Spicy Rice",
		subsets: ["latin"],
		variants: ["400"]
	},
	Spinnaker: {
		family: "Spinnaker",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Spirax: {
		family: "Spirax",
		subsets: ["latin"],
		variants: ["400"]
	},
	Squada_One: {
		family: "Squada One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sree_Krushnadevaraya: {
		family: "Sree Krushnadevaraya",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Sriracha: {
		family: "Sriracha",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400"]
	},
	Srisakdi: {
		family: "Srisakdi",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400", "700"]
	},
	Staatliches: {
		family: "Staatliches",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Stalemate: {
		family: "Stalemate",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Stalinist_One: {
		family: "Stalinist One",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Stardos_Stencil: {
		family: "Stardos Stencil",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Stint_Ultra_Condensed: {
		family: "Stint Ultra Condensed",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Stint_Ultra_Expanded: {
		family: "Stint Ultra Expanded",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Stoke: {
		family: "Stoke",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400"]
	},
	Strait: {
		family: "Strait",
		subsets: ["latin"],
		variants: ["400"]
	},
	Stylish: {
		family: "Stylish",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Sue_Ellen_Francisco: {
		family: "Sue Ellen Francisco",
		subsets: ["latin"],
		variants: ["400"]
	},
	Suez_One: {
		family: "Suez One",
		subsets: ["hebrew", "latin", "latin-ext"],
		variants: ["400"]
	},
	Sumana: {
		family: "Sumana",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Sunflower: {
		family: "Sunflower",
		subsets: ["latin", "korean"],
		variants: ["300", "500", "700"]
	},
	Sunshiney: {
		family: "Sunshiney",
		subsets: ["latin"],
		variants: ["400"]
	},
	Supermercado_One: {
		family: "Supermercado One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Sura: {
		family: "Sura",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "700"]
	},
	Suranna: {
		family: "Suranna",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Suravaram: {
		family: "Suravaram",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Suwannaphum: {
		family: "Suwannaphum",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Swanky_and_Moo_Moo: {
		family: "Swanky and Moo Moo",
		subsets: ["latin"],
		variants: ["400"]
	},
	Syncopate: {
		family: "Syncopate",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Tajawal: {
		family: "Tajawal",
		subsets: ["arabic", "latin"],
		variants: ["200", "300", "400", "500", "700", "800", "900"]
	},
	Tangerine: {
		family: "Tangerine",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Taprom: {
		family: "Taprom",
		subsets: ["khmer"],
		variants: ["400"]
	},
	Tauri: {
		family: "Tauri",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Taviraj: {
		family: "Taviraj",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Teko: {
		family: "Teko",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	Telex: {
		family: "Telex",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Tenali_Ramakrishna: {
		family: "Tenali Ramakrishna",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Tenor_Sans: {
		family: "Tenor Sans",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Text_Me_One: {
		family: "Text Me One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Thasadith: {
		family: "Thasadith",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: ["400", "400i", "700", "700i"]
	},
	The_Girl_Next_Door: {
		family: "The Girl Next Door",
		subsets: ["latin"],
		variants: ["400"]
	},
	Tienne: {
		family: "Tienne",
		subsets: ["latin"],
		variants: ["400", "700", "900"]
	},
	Tillana: {
		family: "Tillana",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "500", "600", "700", "800"]
	},
	Timmana: {
		family: "Timmana",
		subsets: ["latin", "telugu"],
		variants: ["400"]
	},
	Tinos: {
		family: "Tinos",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"hebrew",
			"greek-ext",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Titan_One: {
		family: "Titan One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Titillium_Web: {
		family: "Titillium Web",
		subsets: ["latin", "latin-ext"],
		variants: [
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"900"
		]
	},
	Trade_Winds: {
		family: "Trade Winds",
		subsets: ["latin"],
		variants: ["400"]
	},
	Trirong: {
		family: "Trirong",
		subsets: ["latin", "latin-ext", "vietnamese", "thai"],
		variants: [
			"100",
			"100i",
			"200",
			"200i",
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i",
			"800",
			"800i",
			"900",
			"900i"
		]
	},
	Trocchi: {
		family: "Trocchi",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Trochut: {
		family: "Trochut",
		subsets: ["latin"],
		variants: ["400", "400i", "700"]
	},
	Trykker: {
		family: "Trykker",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Tulpen_One: {
		family: "Tulpen One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Turret_Road: {
		family: "Turret Road",
		subsets: ["latin", "latin-ext"],
		variants: ["200", "300", "400", "500", "700", "800"]
	},
	Ubuntu: {
		family: "Ubuntu",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"700",
			"700i"
		]
	},
	Ubuntu_Condensed: {
		family: "Ubuntu Condensed",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["400"]
	},
	Ubuntu_Mono: {
		family: "Ubuntu Mono",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"greek-ext",
			"latin",
			"latin-ext",
			"greek"
		],
		variants: ["400", "400i", "700", "700i"]
	},
	Ultra: {
		family: "Ultra",
		subsets: ["latin"],
		variants: ["400"]
	},
	Uncial_Antiqua: {
		family: "Uncial Antiqua",
		subsets: ["latin"],
		variants: ["400"]
	},
	Underdog: {
		family: "Underdog",
		subsets: ["cyrillic", "latin", "latin-ext"],
		variants: ["400"]
	},
	Unica_One: {
		family: "Unica One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	UnifrakturCook: {
		family: "UnifrakturCook",
		subsets: ["latin"],
		variants: ["700"]
	},
	UnifrakturMaguntia: {
		family: "UnifrakturMaguntia",
		subsets: ["latin"],
		variants: ["400"]
	},
	Unkempt: {
		family: "Unkempt",
		subsets: ["latin"],
		variants: ["400", "700"]
	},
	Unlock: {
		family: "Unlock",
		subsets: ["latin"],
		variants: ["400"]
	},
	Unna: {
		family: "Unna",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "400i", "700", "700i"]
	},
	VT323: {
		family: "VT323",
		subsets: ["latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Vampiro_One: {
		family: "Vampiro One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Varela: {
		family: "Varela",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Varela_Round: {
		family: "Varela Round",
		subsets: ["hebrew", "latin", "latin-ext", "vietnamese"],
		variants: ["400"]
	},
	Vast_Shadow: {
		family: "Vast Shadow",
		subsets: ["latin"],
		variants: ["400"]
	},
	Vesper_Libre: {
		family: "Vesper Libre",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400", "500", "700", "900"]
	},
	Vibes: {
		family: "Vibes",
		subsets: ["arabic", "latin"],
		variants: ["400"]
	},
	Vibur: {
		family: "Vibur",
		subsets: ["latin"],
		variants: ["400"]
	},
	Vidaloka: {
		family: "Vidaloka",
		subsets: ["latin"],
		variants: ["400"]
	},
	Viga: {
		family: "Viga",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Voces: {
		family: "Voces",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Volkhov: {
		family: "Volkhov",
		subsets: ["latin"],
		variants: ["400", "400i", "700", "700i"]
	},
	Vollkorn: {
		family: "Vollkorn",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese",
			"greek"
		],
		variants: [
			"400",
			"400i",
			"600",
			"600i",
			"700",
			"700i",
			"900",
			"900i"
		]
	},
	Vollkorn_SC: {
		family: "Vollkorn SC",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400", "600", "700", "900"]
	},
	Voltaire: {
		family: "Voltaire",
		subsets: ["latin"],
		variants: ["400"]
	},
	Waiting_for_the_Sunrise: {
		family: "Waiting for the Sunrise",
		subsets: ["latin"],
		variants: ["400"]
	},
	Wallpoet: {
		family: "Wallpoet",
		subsets: ["latin"],
		variants: ["400"]
	},
	Walter_Turncoat: {
		family: "Walter Turncoat",
		subsets: ["latin"],
		variants: ["400"]
	},
	Warnes: {
		family: "Warnes",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Wellfleet: {
		family: "Wellfleet",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Wendy_One: {
		family: "Wendy One",
		subsets: ["latin", "latin-ext"],
		variants: ["400"]
	},
	Wire_One: {
		family: "Wire One",
		subsets: ["latin"],
		variants: ["400"]
	},
	Work_Sans: {
		family: "Work Sans",
		subsets: ["latin", "latin-ext"],
		variants: [
			"100",
			"200",
			"300",
			"400",
			"500",
			"600",
			"700",
			"800",
			"900"
		]
	},
	Yanone_Kaffeesatz: {
		family: "Yanone Kaffeesatz",
		subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
		variants: ["200", "300", "400", "700"]
	},
	Yantramanav: {
		family: "Yantramanav",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["100", "300", "400", "500", "700", "900"]
	},
	Yatra_One: {
		family: "Yatra One",
		subsets: ["devanagari", "latin", "latin-ext"],
		variants: ["400"]
	},
	Yellowtail: {
		family: "Yellowtail",
		subsets: ["latin"],
		variants: ["400"]
	},
	Yeon_Sung: {
		family: "Yeon Sung",
		subsets: ["latin", "korean"],
		variants: ["400"]
	},
	Yeseva_One: {
		family: "Yeseva One",
		subsets: [
			"cyrillic-ext",
			"cyrillic",
			"latin",
			"latin-ext",
			"vietnamese"
		],
		variants: ["400"]
	},
	Yesteryear: {
		family: "Yesteryear",
		subsets: ["latin"],
		variants: ["400"]
	},
	Yrsa: {
		family: "Yrsa",
		subsets: ["latin", "latin-ext"],
		variants: ["300", "400", "500", "600", "700"]
	},
	ZCOOL_KuaiLe: {
		family: "ZCOOL KuaiLe",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	ZCOOL_QingKe_HuangYou: {
		family: "ZCOOL QingKe HuangYou",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	ZCOOL_XiaoWei: {
		family: "ZCOOL XiaoWei",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	Zeyada: {
		family: "Zeyada",
		subsets: ["latin"],
		variants: ["400"]
	},
	Zhi_Mang_Xing: {
		family: "Zhi Mang Xing",
		subsets: ["latin", "chinese-simplified"],
		variants: ["400"]
	},
	Zilla_Slab: {
		family: "Zilla Slab",
		subsets: ["latin", "latin-ext"],
		variants: [
			"300",
			"300i",
			"400",
			"400i",
			"500",
			"500i",
			"600",
			"600i",
			"700",
			"700i"
		]
	},
	Zilla_Slab_Highlight: {
		family: "Zilla Slab Highlight",
		subsets: ["latin", "latin-ext"],
		variants: ["400", "700"]
	}
};
