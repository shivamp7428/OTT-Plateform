import mongoose from 'mongoose';
import dotenv from 'dotenv';
import data1 from './Bollywood/data.js';
import data2 from './Hollywood/data.js';
import data3 from './Kanada/data.js';
import data4 from './Malyalam/data.js';
import data5 from './Tamil/data.js';
import data6 from './Telagu/data.js';
import Movie from '../models/movie.js'; 
import Hindi from '../models/Hindi.js';
import Hollywood from './../models/Hollywood.js';
import Malyalam from '../models/Malyalam.js';
import Tamil from '../models/Tamil.js';
import Telagu from '../models/Telagu.js';


dotenv.config();

const MONGO_URL = process.env.MONGO_URI || 'mongodb+srv://shivampatelpatel2005:Shivam123@cluster0.lok7w.mongodb.net/OTT';


async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(" Connected to MongoDB");
    await initDB();
    await HindiDB();
    await HollywoodDB();
    await MalyalamDB();
    await TamilDB();
    await TelaguDB();
    process.exit();
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    process.exit(1);
  }
}

//All Movies for Home , search
const initDB = async () => {
  try {
    await Movie.deleteMany({});

    const allMovies = [
      ...data1,
      ...data2,
      ...data3,
      ...data4,
      ...data5,
      ...data6
    ];

    await Movie.insertMany(allMovies);
    console.log(" Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing movie data:", error);
  }
};
// Hindi 
const HindiDB = async () => {
  try {
    await Hindi.deleteMany({});

    const HindiMovies = [
     ...data1
    ];
    await Hindi.insertMany(HindiMovies);
    console.log(" Hindi  Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing Hindi movie data:", error);
  }
};
// Hollywood
const HollywoodDB = async () => {
  try {
    await Hollywood.deleteMany({});

    const HollywoodMovie = [
       ...data2,
    ];

    await Hollywood.insertMany(HollywoodMovie);
    console.log("Hollywood Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing Hollywood movie data:", error);
  }
};
//Malyalam with Kanada
const MalyalamDB = async () => {
  try {
    await Malyalam.deleteMany({});

    const MalyalamMovie = [
       ...data3,
       ...data4,
    ];

    await Malyalam.insertMany(MalyalamMovie);
    console.log("Malyalam Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing Malyalam movie data:", error);
  }
};
//Tamil
const TamilDB = async () => {
  try {
    await Tamil.deleteMany({});

    const TamilMovie = [
       ...data5,
    ];

    await Tamil.insertMany(TamilMovie);
    console.log("Tamil Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing Tamil movie data:", error);
  }
};
//Telagu
const TelaguDB = async () => {
  try {
    await Telagu.deleteMany({});

    const TamilMovie = [
       ...data6,
    ];

    await Telagu.insertMany(TamilMovie);
    console.log("Telagu Movie data initialized successfully.");
  } catch (error) {
    console.error(" Error initializing Telagu movie data:", error);
  }
};
main();

