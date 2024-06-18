import express from "express";
import { getuser, getcustomers, getadmin } from "../controlers/general.js";
const router = express.Router();
router.get("/users/:id", getuser);
router.get("/customers", getcustomers);
router.get("/admin", getadmin);

export default router;
