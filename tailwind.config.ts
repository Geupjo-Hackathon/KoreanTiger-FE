import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      pink_F6C8FB: `F6C8FB`,
      hotpink_E784F2: `#E784F2`,
      blue_718DF2: `#718DF2`,
      jade_84FCED: `#84FCED`,
      violet_9740F6: `#9740F6`,

      //basic color
      basic_FFFFFF: `#FFFFFF`,
      basic_EFEFEF: `#EFEFEF`,
      basic_CECECE: `#CECECE`,
      basic_6C6C6C: `#6C6C6C`,
      basic_000000: `#000000`,

      //hover color
      hover_FEF3FF: `#FEF3FF`,
      hover_E5AFEB: `#E5AFEB`,
      hover_BCC6EC: `#BCC6EC`,
      hover_C7EEE9: `#C7EEE9`,
      hover_D9C3F1: `#D9C3F1`,

      //disabed
      dis_EEEEEE: `#EEEEEE`,
      dis_CCCCCC: `#CCCCCC`,
    },
  },
  plugins: [],
};
export default config;
