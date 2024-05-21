import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
    // ...
    integrations: [react()],
    resolve: {
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        },
    },
});

