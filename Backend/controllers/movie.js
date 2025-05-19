import movieModel from '../models/movie.js'
import HindiModel from '../models/Hindi.js'
import HollywoodModel from './../models/Hollywood.js';
import MalyalamModel from './../models/Malyalam.js';
import TamilModel from './../models/Tamil.js';
import TelaguModel from './../models/Telagu.js';

export const index = async(req ,res)=>{
    try {
        const AllMovie = await movieModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message });
    }
}

export const  Hindi = async(req ,res)=>{
    try {
        const AllMovie = await HindiModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: error.message });
    }
}

export const  Hollywood = async(req ,res)=>{
    try {
        const AllMovie = await HollywoodModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: error.message });
    }
}

export const  Malyalam = async(req ,res)=>{
    try {
        const AllMovie = await MalyalamModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: error.message });
    }
}

export const  Tamil = async(req ,res)=>{
    try {
        const AllMovie = await TamilModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: error.message });
    }
}

export const  Telagu = async(req ,res)=>{
    try {
        const AllMovie = await TelaguModel.find()
        return res.status(200).json(AllMovie);
    } catch (error) {
         console.log(error)
        return res.status(500).json({ message: error.message });
    }
}