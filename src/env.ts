import { dataEnvConfig } from "./configEnv";

declare global {
  interface Window {
    env: any;
    BACKEND_URL: string;
    BACKEND_ADMIN_URL: string;
  }
}

export const env = dataEnvConfig;
