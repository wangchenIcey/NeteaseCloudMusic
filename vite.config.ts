import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir) => path.join(__dirname, dir)
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve('src'),
        }
    },

    plugins: [vue()]
})