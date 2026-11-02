/**
 * Court domain schemas
 * Covers: active courts, per-sport court availability
 */

import { z } from "zod";

export const TennisSensorSchema = z.object({
  type: z.literal("Tennis"),
  id: z.number(),
  peopleDetected: z.boolean(),
  lastUpdated: z.iso.datetime(),
  pickleballNetStatus: z.stringFormat("locked-status", /(un)?locked/)
});

export type TennisSensorSchema = z.infer<typeof TennisSensorSchema>;

export const RacquetballSensorSchema = z.object({
  type: z.literal("Racquetball"),
  id: z.number(),
  peopleDetected: z.boolean(),
  lastUpdated: z.iso.datetime()
});

export type RacquetballSensorSchema = z.infer<typeof RacquetballSensorSchema>;

export const BadmintonSensorSchema = z.object({
  type: z.literal("Badminton"),
  id: z.number(),
  peopleDetected: z.boolean(),
  lastUpdated: z.iso.datetime()
});

export type BadmintonSensorSchemaType = z.infer<typeof BadmintonSensorSchema>;
