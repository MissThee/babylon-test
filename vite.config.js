import {defineConfig} from 'vite'
import legacy from '@vitejs/plugin-legacy'
export default defineConfig({
    server: {
        port: 8080,
        host: '0.0.0.0'
    },
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ]
})