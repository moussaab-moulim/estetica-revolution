module.exports = {
    content: ["./pages/**/*.js", "./components/**/*.js", "./slices/**/*.js"],
    theme: {
        fontFamily: {
            sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            roboto: '"Roboto",sans-serif',
            open: '"Open Sans",sans-serif',
            poppins: '"Poppins",sans-serif',
            momentun: '"Monument Extended", sans-serif',
        },
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
