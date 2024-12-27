const express = require('express');
const router = express.Router();

const carnet = '202100171';

router.post('/login', (req, res)=>{
    const { username, password } = req.body;
    if(username === `sensei_${carnet}` && password ===`ipc1_${carnet}`){
        res.status(200).json({message: 'Login successfull'})
    }else{
        res.status(401).json({message: 'Invalid credentials'})
    }
})

module.exports = router;