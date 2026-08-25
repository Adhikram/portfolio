// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://adhikram.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
