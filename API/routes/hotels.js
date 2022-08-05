import express from 'express';
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js';
const router = express.Router();
import 'express-async-errors';


router.post('/',(req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
        const savedHotel = newHotel.save();
        res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put('/:id',async (req,res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {
                $set:req.body
            },
            {
                $new:true
            }
            ) ;
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500).json(err);
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const DeletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(DeletedHotel);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/:id',async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        next(err);   //Go to the middleware
    }
})

router.get('/',async (req,res,next)=>{
    const failed = true;
    if(failed) return next(createError(401,"You are not authenticated"))

    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        next(err);   //Go to next error middleware
    }
})

export default router;