import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/components/**/*.{js,ts,jsx,tsx,mdx}`,
    `./src/app/**/*.{js,ts,jsx,tsx,mdx}`,
  ],
  theme: {
    container: {
      center: true,
      padding: `2rem`,
      screens: {
        '2xl': `1400px`,
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: `0` },
          to: { height: `var(--radix-accordion-content-height)` },
        },
        'accordion-up': {
          from: { height: `var(--radix-accordion-content-height)` },
          to: { height: `0` },
        },
      },
      animation: {
        'accordion-down': `accordion-down 0.2s ease-out`,
        'accordion-up': `accordion-up 0.2s ease-out`,
      },
      gridTemplateColumns: {
        13: `repeat(13, minmax(0, 1fr))`,
        14: `repeat(14, minmax(0, 1fr))`,
        29: `repeat(29, minmax(0, 1fr))`,
      },
      gridTemplateRows: {
        15: `repeat(15, minmax(0, 1fr))`,
      },
      gridColumn: {
        'span-14': `span 14 / span 14`,
      },
      lineClamp: {
        9: `9`,
        10: `10`,
      },
      dropShadow: {
        1: `0 4px 3px rgba(0, 0, 0, 0.3)`,
      },
      listStyleType: {
        none: `none`,
        disc: `disc`,
        decimal: `decimal`,
        'lower-roman': `lower-roman`,
        'lower-alphabet': `lower-alpha`,
      },
    },
  },
  plugins: [
    plugin(({ addBase }: { addBase: (css: object) => void }) => {
      addBase({
        html: { fontSize: `14px` },
      });
    }),
  ],
};

export default config;
