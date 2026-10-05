/**
 * Handles all environment variables and hardcoded values
 * Do not access import.meta.env values from anywhere else,
 * you must import them from here (for safety reasons)!
 */

/**
 * `true` when in developer environment;
 * otherwise assume the app is in a production environment.
 * Check this before printing errors and debug info to console!
 * */
const IS_DEV = import.meta.env.DEV;

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const API_URL = import.meta.env.VITE_API_URL;