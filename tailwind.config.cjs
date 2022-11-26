/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "darkest": "#161c27",
                "dark": "#141A25",
                "blue": "#88A4DF",
                "dark-blue": "#242c3d",
                "gray": "#5C6C8C",
                "gray-2": "#54648A",
                "gray-3": "#3E4E6D",
                "dark-gray": "#344454"
            }
        }
    },
    plugins: []
};
