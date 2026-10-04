/**
 * Standardized API types for backend responses
 * All endpoints should return ApiResponse<T> format
 */

import { ApiErrorCode, type ApiResponse } from "eppley-shared/api"

/**
 * Structured error class for API errors
 * Use this throughout services and controllers for consistent error handling
 */
export class ApiError extends Error {
  constructor(
    public code: ApiErrorCode,
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Response builder for consistent API responses
 */
export class ResponseBuilder {
  static success<T>(data: T): ApiResponse<T> {
    return {
      success: true,
      data,
    };
  }

  static error(
    apiErrorCode: ApiErrorCode,
    message: string
  ): ApiResponse {
    return {
      success: false,
      error: {
        code: apiErrorCode,
        message,
      },
    };
  }
}
