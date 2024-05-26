/// <reference types="vite/client" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly VITE_API_URL: string;
      readonly VITE_API_KEY: string;
      readonly NODE_ENV: 'development' | 'production' | 'test';
    }
  }
  