import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}"
    ],
    theme: {
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                cairo: ["Cairo", "sans-serif"],
                brother: ["Brother", "sans-serif"],
                tahoma: ["Tahoma", "sans-serif"],
                uniform: ["uniform", "sans-serif"],
                blackfont: ["BlackFont", "sans-serif"],
            },
            colors: {
                ChilisRed: "var(--color-ChilisRed)",
                ChilisHoverButton: "var(--color-ChilisRedHover)",
                chilisBlack: "#3b0000",
                red: {
                    700: "#b91c1c"
                }
            }

        },
    },
    plugins: [],
};

export default config;
