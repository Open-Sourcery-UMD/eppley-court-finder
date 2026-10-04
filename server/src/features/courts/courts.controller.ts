/**
 * Courts Controller
 * Validates incoming requests and sends responses
 * Delegates to courts.service.ts for business logic
 */

import type { Request, Response } from "express"
import { asyncHandler } from "../../common/middleware/errorHandler.js"
import * as courtsRepository from "./courts.repository.js"
import { ResponseBuilder } from "../../types/api.types.js";

export const getActiveCourts = asyncHandler(async (req: Request, res: Response) => {
  const result = await courtsRepository.getActiveCourts();
  res.json(ResponseBuilder.success(result));
});

export const getTennisCourts = asyncHandler(async (req: Request, res: Response) => {
  const result = await courtsRepository.getTennisCourts();
  res.json(ResponseBuilder.success(result));
});

export const getPickleballCourts = asyncHandler(async (req: Request, res: Response) => {
  const result = await courtsRepository.getPickleballCourts();
  res.json(ResponseBuilder.success(result));
});

export const getBadmintonCourts = asyncHandler(async (req: Request, res: Response) => {
  const result = await courtsRepository.getBadmintonCourts();
  res.json(ResponseBuilder.success(result));
});

export const getRacquetballCourts = asyncHandler(async (req: Request, res: Response) => {
  const result = await courtsRepository.getRacquetballCourts();
  res.json(ResponseBuilder.success(result));
});
