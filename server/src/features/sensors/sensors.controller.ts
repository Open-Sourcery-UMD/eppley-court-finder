/**
 * Courts Controller
 * Validates incoming requests and sends responses
 * Delegates to courts.service.ts for business logic
 */

import type { Request, Response } from "express"
import { asyncHandler } from "../../common/middleware/errorHandler.js"
import { ResponseBuilder } from "../../types/api.types.js"
import {
  BadmintonSensorSchema,
  TennisSensorSchema
} from "eppley-shared/schemas/sensors"
import { ApiErrorCode } from "eppley-shared/api";

export const postTennisCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, tennis courts, badminton courts
  console.log("recieved POST to api/sensors/tennis");
  const post = TennisSensorSchema.safeParse(req.body);
  if (!post.success) {
    res.status(400).json(
      ResponseBuilder.error(ApiErrorCode.INVALID_INPUT, "Invalid format"));
  }

  let sensorData = post.data;
  // send data to Supabase

  res.status(200).json(ResponseBuilder.success(null));
});

export const postBadmintonCourts = asyncHandler(async (req: Request, res: Response) => {
  // update active courts, badminton courts
  console.log("recieved POST to api/sensors/badminton");
  const post = BadmintonSensorSchema.safeParse(req.body);
  if (!post) {
    res.status(400).json(
      ResponseBuilder.error(ApiErrorCode.INVALID_INPUT, "Invalid format"));
  }
``
  let sensorData = post.data;
  // send data to Supabase

  res.status(200).json(ResponseBuilder.success(null));
});
