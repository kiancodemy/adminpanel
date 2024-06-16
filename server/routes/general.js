import express from "express";
import { getuser, getcustomers } from "../controlers/general.js";
const router = express.Router();
router.get("/users/:id", getuser);
router.get("/customers", getcustomers);

export default router;
