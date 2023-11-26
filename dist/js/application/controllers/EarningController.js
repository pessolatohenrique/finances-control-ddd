"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningController = void 0;
const EarningService_1 = require("../../services/EarningService");
const EarningRepositoryImpl_1 = require("../../infrastructure/repositories/EarningRepositoryImpl");
class EarningController {
    constructor(earningService) {
        this.earningService = earningService;
    }
    static index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new EarningRepositoryImpl_1.EarningRepositoryImpl();
                const service = new EarningService_1.EarningService(repository);
                const result = service.findAll();
                return res.status(200).json(result);
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.EarningController = EarningController;
