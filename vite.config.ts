import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
        host: 'localhost',
        port: 3000,
        https: false,
        proxy: {
            // ...
        },
    },
    plugins: [react()],
});
