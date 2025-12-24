import { Request, Response, RequestHandler } from "express";

type AsyncController<T = any> = (
  req: Request,
  res: Response
) => Promise<T>;

export const asyncHandler =
  (controller: AsyncController): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(controller(req, res))
      .then((data) => {
        res.locals.data = data;
        next();
      })
      .catch(next);
  };


