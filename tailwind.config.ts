import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                cairo: ["var(--font-cairo)"],
                brother: ["var(--font-brother)"],
            },
            colors: {
                chiliRed: {
                    DEFAULT: 'rgb(231, 35, 35)'
                },
                chiliWhite: {
                    DEFAULT: '#ffffff'
                },
                darkBlue: {
                    DEFAULT: 'rgb(34, 35, 91)'
                }
            }

        },
    },
    plugins: [],
};

export default config;
