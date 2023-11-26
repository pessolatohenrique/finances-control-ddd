import { Earning } from "../entities/Earning";

export interface EarningRepository {
  findAll(): Earning[]
}