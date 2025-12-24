export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: any;
    meta?: any;
  }
  
  export class ResponseBuilder {
    static success<T>(message: string, data?: T, meta?: any): ApiResponse<T> {
        return {
            success: true,
            message,
            data,
            meta
        };
    }
  
    static error(message: string, error?: any, meta?: any): ApiResponse {
        return {
            success: false,
            message,
            error,
            meta
        };
    }
  }
  