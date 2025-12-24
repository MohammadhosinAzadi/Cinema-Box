import { Request, Response, NextFunction } from "express";
import { sendError } from "../../Middleware/Response/response";
import { HttpStatus } from "../../Middleware/Response/httpStatus";

export const validateNumericParam = (paramName: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    const value = Number(req.params[paramName]);

    if (!Number.isInteger(value) || value <= 0) {
      return sendError(
        res,
        HttpStatus.BAD_REQUEST,
        `Invalid ${paramName} parameter`
      );
    }

    req.params[paramName] = String(value);

    next();
  };
