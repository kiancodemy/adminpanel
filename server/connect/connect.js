import mongoose from "mongoose";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import { dataProductStat } from "../data/index.js";

import { Productstat } from "../models/productstat.js";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);

    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};
