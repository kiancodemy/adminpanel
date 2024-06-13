import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
dotenv.config();
import { connect } from "./connect/connect.js";
const app = express();

import client from "./routes/client.js";
import sale from "./routes/sale.js";
import general from "./routes/general.js";
import management from "./routes/management.js";
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/client", client);
app.use("/management", management);
app.use("/sale", sale);
app.use("/general", general);

connect();
