import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    esbuild: {
        include: /\.js$/,
        // Specify that .js files should be treated as .jsx by esbuild
        loader: {
            '.js': 'jsx',
        },
    },
})
