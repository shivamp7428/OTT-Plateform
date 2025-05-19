
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

const Telagu = mongoose.model("Telagu", movieSchema); 
export default Telagu;