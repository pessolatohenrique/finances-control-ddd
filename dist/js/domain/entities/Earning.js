"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Earning = void 0;
class Earning {
    constructor() {
        this.id = 0;
        this.name = "";
        this.isPublic = true;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getIsPublic() {
        return this.isPublic;
    }
}
exports.Earning = Earning;
