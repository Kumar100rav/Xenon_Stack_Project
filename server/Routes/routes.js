const express = require('express');
const { saveContact } = require('../Controllers/contact');
const router = express.Router();

//Default route
router.get('/',(req,res)=>{
    res.send('Hello World');
});
//Saving file to database
router.post('/contact',saveContact);

module.exports = router;