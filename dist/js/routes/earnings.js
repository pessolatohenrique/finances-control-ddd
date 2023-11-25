"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EarningController_1 = require("../controllers/EarningController");
const router = (0, express_1.Router)();
router.route("/earning").get(EarningController_1.EarningController.index);
exports.default = router;
