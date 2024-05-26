import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';
import { configDefaults } from 'vitest/config';
import path from 'path';

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
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@store': path.resolve(__dirname, './src/Store'),
        '@Hooks': path.resolve(__dirname, './src/utility/hooks'),
        '@context': path.resolve(__dirname, './src/utility/context'),
        '@utils': path.resolve(__dirname, './src/utility/Utils.ts'),
        '@configs': path.resolve(__dirname, './src/configs'),
        '@layouts': path.resolve(__dirname, './src/Layouts'),
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/setupTests.ts',
      exclude: [...configDefaults.exclude, 'e2e/*'],
    },
  }
})
