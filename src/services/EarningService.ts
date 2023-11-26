import { EarningRepository } from "../domain/repositories/EarningRepository";

export class EarningService {
  private earningRepository: EarningRepository;

  constructor(earningRepository: EarningRepository) {
    this.earningRepository = earningRepository;
  }

  public findAll() {
    const result = this.earningRepository.findAll();
    if (!result) {
      throw new Error("Entity not found");
    }

    return result;
  }
}