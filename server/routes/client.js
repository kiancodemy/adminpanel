import express from "express";
import { getproucts } from "../controlers/client.js";

const router = express.Router();
router.get("/products", getproucts);
export default router;
