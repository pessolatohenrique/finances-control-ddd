"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const earnings_1 = require("./earnings");
class RoutesWrapper {
    static configure(app) {
        app.use(bodyParser.json());
        app.use(earnings_1.default);
    }
}
exports.default = RoutesWrapper;
