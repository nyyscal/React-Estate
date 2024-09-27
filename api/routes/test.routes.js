import express from "express";
import { shoudlBeAdmin, shoudlBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router()

router.get("/should-be-logged-in",verifyToken, shoudlBeLoggedIn);
router.get("/should-be-admin",shoudlBeAdmin)

export default router