import express from "express";
import { getproucts, gettransactions } from "../controlers/client.js";

const router = express.Router();
router.get("/products", getproucts);
router.get("/transactions", gettransactions);

export default router;
