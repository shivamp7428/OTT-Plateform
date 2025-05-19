import express from 'express'
import { Login, LogOut, Sendotp,   VerifyOTP} from '../controllers/user.js';
import {auth} from './../Middleware/user.js';


const router  = express.Router();

router.post("/SendOTP" , Sendotp);
router.post("/VerifyOTP" , VerifyOTP);
router.post("/Login" , Login);

router.get('/Auth', auth, (req, res) => {
  res.status(200).json({
  msg: 'Authenticated',
  user: req.user,
});
});

router.get("/LogOut" , LogOut)


export default router;