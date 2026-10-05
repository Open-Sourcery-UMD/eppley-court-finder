/**
 * Courts Controller
 * Validates incoming requests and sends responses
 * Delegates to courts.service.ts for business logic
 */

import type { Request, Response } from "express"
import { asyncHandler } from "../../common/middleware/errorHandler.js"
import { ResponseBuilder } from "../../types/api.types.js"
import type {
  TennisSensorSchema,
  RacquetballSensorSchema,
  BadmintonSensorSchema
} from "eppley-shared/schemas/sensors"

export const postTennisCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, tennis courts, badminton courts
  res.json(ResponseBuilder.success(null));
});

export const postBadmintonCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, badminton courts
  res.json(ResponseBuilder.success(null));
});

export const postRacquetballCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, racquetball courts
  res.json(ResponseBuilder.success(null));
});
