"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
class RoutesWrapper {
    static configure(app) {
        app.use(bodyParser.json());
    }
}
exports.default = RoutesWrapper;
