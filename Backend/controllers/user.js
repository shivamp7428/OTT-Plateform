import AuthModel from '../models/user.js'
import SendOTP from '../utils/sendOTP.js'
import NodeCache from 'node-cache';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Form from '../models/Form.js'
dotenv.config();


const OTPCache = new NodeCache({ stdTTL: 10 * 60 }); 

export const Sendotp = async (req, res, next) => {
  try {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    if (!name || !email ||  !password) {
      return res.send({ Success: false, message: "All fields are required" });
    }

    const oldUser = await AuthModel.findOne({ email });
    if (oldUser) {
      return res.send({ Success: false, message: "You already exist on this website" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 

    OTPCache.set(email, { otp, name, password, email }); 

    await SendOTP(email, otp);

    return res.send({ Success: true, message: "OTP sent to your email for verification" });

  } catch (error) {
    next(error);
  }
};


export const VerifyOTP = async (req, res, next) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    const otp = req.body.otp?.trim();

    if (!email || !otp) {
      return res.status(400).json({ Success: false, message: "Email and OTP are required" });
    }

    const cacheData = OTPCache.get(email);

    if (!cacheData) {
      return res.status(400).json({ Success: false, message: "OTP has expired or does not exist" });
    }

    if (cacheData.otp !== otp) {
      return res.status(400).json({ Success: false, message: "Invalid OTP" });
    }

    

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(cacheData.password, 10);

    const newUser = await AuthModel.create({
      name: cacheData.name,
      email: cacheData.email,
      password: hashedPassword,
    });

    

    OTPCache.del(email);
    
   const payload = {
      userId: newUser._id,       
      email: newUser.email,    
      username: newUser.name,
   };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ Success: true, User: newUser, message: "OTP verified successfully!" , token});
 } catch (error) {
    console.error("OTP Verification Error:", error);
    return res.status(500).json({ Success: false, message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ Success: false, message: "Enter email or password" });
    }

    const user = await AuthModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ Success: false, message: "You are not signed up" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ Success: false, message: "Invalid password" });
    }

    
    const payload = {
      userId: user._id,
      email: user.email,
    };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      Success: true,
      message: "Login Successfully",
      token,  // Send the token here
    });
  } catch (error) {
    return res.status(500).json({ Success: false, message: error.message });
  }
};

export const LogOut = async (req, res, next) => {
  req.session.destroy(function(err) {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).send('Logout failed');
    }
    res.clearCookie('connect.sid');
    res.send('Logged out successfully');
  });
};

//Upload new user
export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image file uploaded' });

    const imageUrl = `http://localhost:8000/uploads/${req.file.filename}`;

    const formEntry = await Form.create({ imageUrl });

    res.status(201).json({ message: 'Image uploaded successfully', imageUrl, id: formEntry._id });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getLatestImage = async (req, res) => {
  try {
    const latest = await Form.findOne().sort({ _id: -1 }); // latest
    if (!latest) return res.status(404).json({ message: "No image found" });
    res.json({ imageUrl: latest.imageUrl });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
