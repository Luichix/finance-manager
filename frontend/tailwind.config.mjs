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
				'brand': {
					extend: 'dark', // <-HEREDA LOS VALORES POR DEFECTO DEL TEMA DARK
					colors: {
						background: '#282f37', //? sujeto a cambio
						foreground: '#ffffff',
						primary: {
							//! Pr	imario único color
							50: '#2e551c', //? text-primary-50
							100: '#376621',
							200: '#407727',
							300: '#4a882c',
							400: '#539932',
							500: '#5caa37', // default
							600: '#6cb34b',
							700: '#7dbb5f',
							800: '#8dc473',
							900: '#9dcc87',
							DEFAULT: '#5CAA37', //? text-primary
							foreground: '#ffffff'
						},
						secondary: {
							50: '#2c1c47', //? text-primary-50
							100: '#352155',
							200: '#3e2763',
							300: '#462c71',
							400: '#4f327f',
							500: '#58378d',
							600: '#694b98',
							700: '#795fa4',
							800: '#8a73af',
							900: '#9b87bb',
							DEFAULT: '#58378D',
							foreground: '#ffffff'
						},
						tertiary: {
							DEFAULT: '#FFF'
						},
						focus: '#ffffff'
					}
					// layout: {
					// 	disabledOpacity: '0.3', //? disabledOpacity
					// 	radius: {
					// 		small: '4px', //? sm
					// 		medium: '6px', //? md
					// 		large: '8px' //?lg
					// 	},
					// 	borderWidth: {
					// 		small: '1px', //? sm
					// 		medium: '2px', //? md
					// 		large: '3px' //?lg
					// 	}
					// }
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
