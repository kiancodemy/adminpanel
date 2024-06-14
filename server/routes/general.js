import express from "express";
import { getuser } from "../controlers/general.js";
const router = express.Router();
router.get("/users/:id", getuser);

export default router;
