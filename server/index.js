import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

/*import { dirname } from "path";
import { fileURLToPath } from "url";*/

dotenv.config();
import { connect } from "./connect/connect.js";
const app = express();

import client from "./routes/client.js";
import sale from "./routes/sale.js";
import generals from "./routes/general.js";

import management from "./routes/management.js";

connect();

app.use(cors({ origin: process.env.FRONT }));
app.use(express.json());
//const __dirname = dirname(fileURLToPath(import.meta.url));
///app.use(express.static(path.join(__dirname, "..", "/client/dist")));
app.use("/client", client);
app.use("/management", management);
app.use("/sale", sale);
app.use("/general", generals);
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/client/dist/index.html"));
});*/
app.listen(process.env.PORT, () => {
  console.log("app connected");
});
