import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config                        
export default defineConfig({
    // ...                                            
    integrations: [react()],
    resolve: {
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    },
    site: 'https://astro-playground-pi.vercel.app/',
});                    