import { Earning } from "../../domain/entities/Earning";
import { EarningRepository } from "../../domain/repositories/EarningRepository";
//import EarningModel from "../models/earning";
//const EarningModel = require("../models").Earning;

export class EarningRepositoryImpl implements EarningRepository {
  public findAll(): Earning[] {
    const result: Earning[] = [];
    return result;
  }
}