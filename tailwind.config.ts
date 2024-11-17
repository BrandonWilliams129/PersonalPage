import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary-hover)',
              },
            },
            h1: {
              color: 'var(--primary)',
            },
            h2: {
              color: 'var(--primary)',
            },
            h3: {
              color: 'var(--primary)',
            },
            strong: {
              color: 'var(--foreground)',
            },
            code: {
              color: 'var(--primary)',
            },
            blockquote: {
              borderLeftColor: 'var(--primary)',
              color: 'var(--foreground)',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
