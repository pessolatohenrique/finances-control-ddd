import { Router } from "express";

import bodyParser = require("body-parser");
import earningRoutes from "./earnings";

export default class RoutesWrapper {
  public static configure(app: Router) {
    app.use(bodyParser.json());
    app.use(earningRoutes);
  }
}