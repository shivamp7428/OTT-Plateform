import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
 console.log(authHeader)
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Save user data for route access
    console.log("Authenticated user:", decoded);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
