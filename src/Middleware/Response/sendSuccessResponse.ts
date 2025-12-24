import { Request, Response, NextFunction } from "express";
import { sendSuccess } from "../../Middleware/Response/response";

export const sendSuccessResponse =
  (message: string, statusCode = 200) =>
  (req: Request, res: Response, next: NextFunction) => {
    return sendSuccess(
      res,
      statusCode,
      message,
      res.locals.data
    );
  };
