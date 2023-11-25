import { Router } from "express";

import { EarningController } from "../controllers/EarningController";

const router = Router();

router.route("/earning").get(EarningController.index);

export default router;
