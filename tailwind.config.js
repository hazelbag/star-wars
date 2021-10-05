module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			greyish: "#343a40",
			hoverRed: "#DC2626",
		},
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
			serif: ["ui-serif", "Georgia"],
			mono: ["ui-monospace", "SFMono-Regular"],
			cartoon: ["Neucha"],
			display: ["Oswald"],
			body: ['"Open Sans"'],
		},
		extend: {
			backgroundImage: {
				"main-cover": "url('/background.png')",
			},
		},
	},
	variants: {
		extend: {
			transform: ["hover", "focus"],
		},
	},
	plugins: [],
};
