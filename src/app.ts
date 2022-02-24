import express from "express";
import cors from "cors";
import router from "./routes";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
