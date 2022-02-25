import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import router from "./routes";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
