
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

const Hindi = mongoose.model("Hindi", movieSchema); 
export default Hindi;