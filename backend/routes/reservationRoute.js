import express from "express";
import send_reservation from "../controller/reservation.js";
import signup from "../controller/signup.js";
import login from "../controller/login.js";

const router = express.Router();

router.post("/reservation/send", send_reservation);
router.post("/signup/send", signup );
router.post("/login/send", login );

export default router;
