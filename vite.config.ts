import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';
import { configDefaults } from 'vitest/config';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE");
  const envWithProcessPrefix = {
    global: {},
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [react()],
    define: envWithProcessPrefix,
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.ts',
      exclude: [...configDefaults.exclude, 'e2e/*'],
    },
  }
})
