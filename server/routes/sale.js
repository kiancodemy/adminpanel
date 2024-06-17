import express from "express";
import { getsales } from "../controlers/sale.js";
const router = express.Router();
router.get("/sale", getsales);
export default router;
