/**
 * Global error handler middleware
 * Catches all errors and returns standardized ApiResponse format
 * Should be added as the last middleware in server.ts
 */

import type { NextFunction, Request, Response } from "express"
import { ApiErrorCode } from "eppley-shared/api";
import { ApiError, ResponseBuilder } from "../../types/api.types.js"
import { NODE_ENV } from "../../config/environment.js";

/**
 * Express error handler middleware
 * Must have 4 parameters (error, req, res, next) for Express to recognize it as error handler
 */
export function errorHandler(
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (NODE_ENV === "development") {
    console.error("[API Error]", err);
  }

  if (err instanceof ApiError) {
    // Handle ApiError (from services or controllers)
    return res.status(err.statusCode).json(
      ResponseBuilder.error(err.code, err.message)
    );
  } else if (err instanceof Error) {
    // Handle generic Error
    console.error("[Unhandled Error]", err.message, err.stack);
    return res.status(500).json(
      ResponseBuilder.error(ApiErrorCode.INTERNAL_ERROR, "Internal server error")
    );
  } else {
    // Unknown error type
    console.error("[Unknown Error Type]", err);
    res.status(500).json(
      ResponseBuilder.error(ApiErrorCode.INTERNAL_ERROR, "An unexpected error occurred")
    );
  }
}

/**
 * Async route handler wrapper
 * Catches async errors and passes them to error handler
 * Usage: app.get("/route", asyncHandler(async (req, res) => { ... }))
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
