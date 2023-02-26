import express from "express";
import expressWs from "express-ws";
import Spacecraft from "./spacecraft.js";
import HistoryRouter from "./HistoryRouter.js";
import { RealtimeRouter } from "./RealtimeRouter.js";
import cors from "cors";

const app = express();
expressWs(app);

const spacecraft = new Spacecraft();
const historyRouter = new HistoryRouter(spacecraft);
const realtimeRouter = new RealtimeRouter(spacecraft);

app.use(cors());
app.use("/history", historyRouter);
app.use("/realtime", realtimeRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log("History hosted at http://localhost:" + PORT + "/history");
});
