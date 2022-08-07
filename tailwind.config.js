/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.tsx",
        "./src/config.ts",
        "./src/color_themes.ts",
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities(
                {
                    "mask-image": (color) => ({
                        maskImage: `linear-gradient(90deg, ${color} 75%, transparent 90%)`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("colors")),
                    type: "color",
                }
            );
        }),
    ],
};
