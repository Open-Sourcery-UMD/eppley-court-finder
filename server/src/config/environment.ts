/**
 * Handles all environment variables and hardcoded values
 * Do not access process.env values from anywhere else,
 * you must import them from here (for safety reasons)!
 */

import dotenv from "dotenv"

dotenv.config();

// Environment variables

if (!process.env.PORT) console.warn("[environment.ts] process.env.PORT undefined, fallback used");
export const PORT = Number(process.env.PORT ?? 4000);

if (!process.env.NODE_ENV) console.warn("[environment.ts] process.env.NODE_ENV undefined, fallback used");
export const NODE_ENV = process.env.NODE_ENV ?? "production";

// Constants

export const host = "0.0.0.0";
