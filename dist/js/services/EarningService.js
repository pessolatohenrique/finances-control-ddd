"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningService = void 0;
class EarningService {
    constructor(earningRepository) {
        this.earningRepository = earningRepository;
    }
    findAll() {
        const result = this.earningRepository.findAll();
        if (!result) {
            throw new Error("Entity not found");
        }
        return result;
    }
}
exports.EarningService = EarningService;
