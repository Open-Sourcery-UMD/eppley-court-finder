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
import { ApiErrorCode } from "eppley-shared/api";

export const postTennisCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, tennis courts, badminton courts
  console.log("recieved POST to api/sensors/tennis");
  // res.status(200).json(ResponseBuilder.success(null));
  res.status(400).json(ResponseBuilder.error(ApiErrorCode.INVALID_INPUT, "Invalid format"));
});

export const postBadmintonCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, badminton courts
  console.log("recieved POST to api/sensors/badminton");
  res.json(ResponseBuilder.success(null));
});
