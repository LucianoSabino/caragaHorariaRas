import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/router.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

export { app };
