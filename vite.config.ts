import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = {...loadEnv(mode, process.cwd(), 'VITE_')};
  
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    },
    server: {
      port: Number(env.VITE_PORT)
    },
    plugins: [react()],
  }
})
