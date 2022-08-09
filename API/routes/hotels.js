import express from 'express';

import { createError } from '../utils/error.js';
const router = express.Router();
import 'express-async-errors';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';


router.post('/',verifyAdmin, createHotel);

router.put('/:id',verifyAdmin, updateHotel)

router.delete('/:id',verifyAdmin, deleteHotel);

router.get('/find/:id',getHotel)

router.get('/',getHotels)

router.get('/countByCity',countByCity);
router.get('/countByType',countByType);

export default router;