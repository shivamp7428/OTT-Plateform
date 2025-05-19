
import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  image: {
    url: String,
    filename: String,
  },
}, {
  timestamps: true,
});

const Tamil = mongoose.model("Tamil", movieSchema); 
export default Tamil;