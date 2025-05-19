import express from 'express'
import multer from 'multer';
import path from 'path';
import { getLatestImage, uploadImage } from '../controllers/user.js';

const router  = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `image-${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

router.get('/latest', getLatestImage);
router.post('/upload', upload.single('image'), uploadImage);

export default router;