// * <- NEW CONFIG
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				light: {
					layout: {},
					colors: {}
				},
				dark: {
					layout: {},
					colors: {}
				},
				//! <--- CUSTOM THEMES ------------------------------------------>
				//? <--- HOW TO USE ------------------------------------------>
				'purple-dark': {
					extend: 'dark', // <-HEREDA LOS VALORES POR DEFECTO DEL TEMA DARK
					colors: {
						background: '#0D001A',
						foreground: '#ffffff',
						primary: {
							50: '#3B096C',
							100: '#520F83',
							200: '#7318A2',
							300: '#9823C2',
							400: '#c031e2',
							500: '#DD62ED',
							600: '#F182F6',
							700: '#FCADF9',
							800: '#FDD5F9',
							900: '#FEECFE',
							DEFAULT: '#DD62ED',
							foreground: '#ffffff'
						},
						secondary: {
							DEFAULT: 'green'
						},
						tertiary: {
							DEFAULT: 'blue'
						},
						focus: '#F182F6'
					},
					layout: {
						disabledOpacity: '0.3', //? disabledOpacity
						radius: {
							small: '4px', //? sm
							medium: '6px', //? md
							large: '8px' //?lg
						},
						borderWidth: {
							small: '1px', //? sm
							medium: '2px', //? md
							large: '3px' //?lg
						}
					}
				}
			},
			//! <--- COMMON COLORS ------------------------------------------>
			// addCommonColors: true, // con esta opción activamos los
			// common colors de NextUI, para útilizar en vez de los de Tailwind
			// https://nextui.org/docs/customization/colors#common-colors
			prefix: 'myapp' //? hsl(var(--myapp-primary))
		})
	]
};
//* END NEW CONFIG

//* <- DEFAULT CONFIG
// const { nextui } = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
//     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };

// import { number } from "astro/zod";
// * END DEFAULT CONFIG
