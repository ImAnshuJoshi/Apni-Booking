import express from 'express';

const router = express.Router();

router.get('/',(req,res)=>{
    // console.log("This is auth end point");
    res.send('This is auth end point')
})

export default router;