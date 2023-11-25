import { NextFunction, Request, Response } from "express";


export class EarningController {
  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(200).json({ msg: "Hello World" });
    } catch (error) {
      return next(error);
    }
  }
}
