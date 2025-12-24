import { Request, Response, NextFunction } from "express";
import { sendError } from "../../Middleware/Response/response";
import { HttpStatus } from "../../Middleware/Response/httpStatus";

export const requireBody = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return sendError(
      res,
      HttpStatus.BAD_REQUEST,
      "Request body is required"
    );
  }
  next();
};
  