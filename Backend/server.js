import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan  from 'morgan'
import connectDB from './config/db.js'
import MovieRouter from './routes/movie.js'
import UserRouter from './routes/user.js'
import session from 'express-session'
import path from 'path'
import formRoutes from './routes/Form.js'
import fs from 'fs';
import { fileURLToPath } from 'url';


dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
if (!fs.existsSync('uploads')) fs.mkdirSync('uploads');
app.use(morgan("combined"))

app.use(session({
  secret:process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use("/api/v1/MovieRoute" , MovieRouter);
app.use("/api/v1/UserRoute" , UserRouter)
app.use('/api/v1/form', formRoutes);


const PORT = process.env.PORT || 8000
app.listen(PORT , ()=>{
    console.log(`Server on port ${PORT}`)
})
