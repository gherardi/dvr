import type { Config } from 'tailwindcss';
import formsPlugin from '@tailwindcss/forms';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--color-background) / 1)',
				foreground: 'hsl(var(--color-foreground) / 1)',
				accent: 'hsl(var(--color-accent) / 1)',
			},
		},
	},
	plugins: [formsPlugin],
} satisfies Config;
