import express from "express";
import { getproucts, gettransactions, getadmin } from "../controlers/client.js";

const router = express.Router();
router.get("/products", getproucts);
router.get("/transactions", gettransactions);
router.get("/admin",getadmin);
export default router;
