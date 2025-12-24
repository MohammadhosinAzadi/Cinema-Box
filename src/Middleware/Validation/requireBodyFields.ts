import { Request, Response, NextFunction } from "express";
import { sendError } from "../../Middleware/Response/response";
import { HttpStatus } from "../../Middleware/Response/httpStatus";

export const requireBodyFields =
  (fields: readonly string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const body = req.body ?? {};

    const missing = fields.filter(
      (field) =>
        body[field] === undefined ||
        body[field] === null ||
        body[field] === ""
    );

    if (missing.length > 0) {
      return sendError(
        res,
        HttpStatus.BAD_REQUEST,
        `Missing required field(s): ${missing.join(", ")}`
      );
    }

    next();
  };

