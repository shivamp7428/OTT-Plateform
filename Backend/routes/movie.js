import express from 'express'
import { Hindi, Hollywood, index, Malyalam, Tamil, Telagu } from '../controllers/movie.js';

const router = express.Router();

router.get("/movie" , index)
router.get("/hindi" , Hindi)
router.get("/hollywood" , Hollywood)
router.get("/malyalam" , Malyalam)
router.get("/tamil" , Tamil)
router.get("/telagu" , Telagu)
export default router;