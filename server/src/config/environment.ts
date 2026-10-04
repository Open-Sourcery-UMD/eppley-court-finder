/**
 * Handles all environment variables and hardcoded values
 */

import dotenv from "dotenv"

dotenv.config();

// Environment variables

if (!process.env.PORT) console.warn("[environment.ts] process.env.PORT undefined, fallback used");
export const PORT = Number(process.env.PORT ?? 4000);

if (!process.env.CLIENT_URL) console.warn("[environment.ts] process.env.CLIENT_URL undefined, fallback used");
export const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:5173";

if (!process.env.NODE_ENV) console.warn("[environment.ts] process.env.NODE_ENV undefined, fallback used");
export const NODE_ENV = process.env.NODE_ENV ?? "production";

export const listenHost = "0.0.0.0";

