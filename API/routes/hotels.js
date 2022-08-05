import express from 'express';

import { createError } from '../utils/error.js';
const router = express.Router();
import 'express-async-errors';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';


router.post('/',createHotel);

router.put('/:id',updateHotel)

router.delete('/:id',deleteHotel);

router.get('/:id',getHotel)

router.get('/',getHotels)

export default router;