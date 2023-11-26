import { NextFunction, Request, Response } from "express";
import { EarningService } from "../../services/EarningService";
import { EarningRepositoryImpl } from "../../infrastructure/repositories/EarningRepositoryImpl"

export class EarningController {
  private earningService: EarningService;

  constructor(earningService: EarningService) {
    this.earningService = earningService;
  }

  static async index(req: Request, res: Response, next: NextFunction) {
    try {
      const repository = new EarningRepositoryImpl();
      const service = new EarningService(repository);
      const result = service.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return next(error);
    }
  }
}
