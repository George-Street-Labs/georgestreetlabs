import { defineConfig } from 'astro/config';
import crypto from 'crypto';

export default defineConfig({
  site: 'https://georgestreetlabs.com',
  vite: {
    build: {
      rollupOptions: {
        output: {
          chunkFileNames(chunkInfo) {
            const name = chunkInfo.name ?? 'chunk';
            const truncated = name.slice(0, 50);
            const hash = crypto.createHash('md5').update(name).digest('hex').slice(0, 8);
            return `chunks/${truncated}-${hash}.js`;
          },
        },
      },
    },
  },
});
