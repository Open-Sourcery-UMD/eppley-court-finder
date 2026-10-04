/**
 * Court domain schemas
 * Covers: active courts, per-sport court availability
 */

import { z } from "zod";

export const PickleballCourtsSchema = z.object({
  type: z.literal("Pickleball"),
  id: z.number(),
  available: z.string(),
  availableSince: z.iso.datetime(),
  occupiedSince: z.iso.datetime()
});

export type PickleballCourtsSchemaType = z.infer<typeof PickleballCourtsSchema>;

export const TennisCourtsSchema = z.object({
  type: z.literal("Tennis"),
  id: z.number(),
  available: z.string(),
  availableSince: z.iso.datetime(),
  occupiedSince: z.iso.datetime(),
  pickleball: z.array(PickleballCourtsSchema) // Array of Pickleball objects
});

export type TennisCourtsSchemaType = z.infer<typeof TennisCourtsSchema>;

export const BadmintonCourtsSchema = z.object({
  type: z.literal("Badminton"),
  id: z.number(),
  available: z.string(),
  availableSince: z.iso.datetime(),
  occupiedSince: z.iso.datetime()
});

export type BadmintonCourtsSchemaType = z.infer<typeof BadmintonCourtsSchema>;

export const RacquetballCourtsSchema = z.object({
  type: z.literal("Racquetball"),
  id: z.number(),
  available: z.string(),
  availableSince: z.iso.datetime(),
  occupiedSince: z.iso.datetime()
});

export type RacquetballCourtsSchemaType = z.infer<typeof RacquetballCourtsSchema>;

export const ActiveCourtsSchema = z.object({
  tennis: z.array(TennisCourtsSchema),
  badminton: z.array(BadmintonCourtsSchema),
  racquetball: z.array(RacquetballCourtsSchema)
});

export type ActiveCourtsSchemaType = z.infer<typeof ActiveCourtsSchema>;
