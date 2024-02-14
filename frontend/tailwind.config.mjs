// * <- NEW CONFIG
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              50: '#2e551c', //? example: text-primary-50
              100: '#376621',
              200: '#407727',
              300: '#4a882c',
              400: '#539932',
              500: '#5caa37', // default
              600: '#6cb34b',
              700: '#7dbb5f',
              800: '#8dc473',
              900: '#9dcc87',
              DEFAULT: '#5CAA37', // primary
              foreground: '#ffffff', // contrast
            },
            secondary: {
              50: '#2c1c47', //? example: text-secondary-50
              100: '#352155',
              200: '#3e2763',
              300: '#462c71',
              400: '#4f327f',
              500: '#58378d', // default
              600: '#694b98',
              700: '#795fa4',
              800: '#8a73af',
              900: '#9b87bb',
              DEFAULT: '#58378D', // secondary
              foreground: '#ffffff', // contrast
            },
            tertiary: '#eae8d6',
            foreground: '#ffffff',
            base: '#1f1f1b', // font color
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              50: '#2e551c', //? example: text-primary-50
              100: '#376621',
              200: '#407727',
              300: '#4a882c',
              400: '#539932',
              500: '#5caa37', // default
              600: '#6cb34b',
              700: '#7dbb5f',
              800: '#8dc473',
              900: '#9dcc87',
              DEFAULT: '#5CAA37', // primary
              foreground: '#ffffff', // contrast
            },
            secondary: {
              50: '#2c1c47', //? example: text-secondary-50
              100: '#352155',
              200: '#3e2763',
              300: '#462c71',
              400: '#4f327f',
              500: '#58378d', // default
              600: '#694b98',
              700: '#795fa4',
              800: '#8a73af',
              900: '#9b87bb',
              DEFAULT: '#58378D', // secondary
              foreground: '#ffffff', // contrast
            },
            tertiary: '#eae8d6',
            foreground: '#ffffff',
            base: '#1f1f1b', // font color
          },
        },
      },
      //! <--- COMMON COLORS ------------------------------------------>
      // addCommonColors: true, // con esta opción activamos los
      // common colors de NextUI, para útilizar en vez de los de Tailwind
      // https://nextui.org/docs/customization/colors#common-colors
      prefix: 'myapp', //? hsl(var(--myapp-primary))
    }),
  ],
};
