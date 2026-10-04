/**
 * Standardized response type
 */
export type ApiResponse<T = any> = {
  success: true;
  data: T;
} | {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, string>;
  };
}

export enum ApiErrorCode {
  // Auth errors
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  UNAUTHORIZED = "UNAUTHORIZED",

  // Validation errors
  INVALID_INPUT = "INVALID_INPUT",
  VALIDATION_ERROR = "VALIDATION_ERROR",

  // Resource errors
  NOT_FOUND = "NOT_FOUND",

  // Server errors
  INTERNAL_ERROR = "INTERNAL_ERROR",
  SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE",
}
