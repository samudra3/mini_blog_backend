const {userLogic} = require('../controllers/userController');
const{postLogic}=  require('../controllers/postController');
const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
      res.send('welcome to the user route')
})

router.post('/',userLogic);

module.exports=router;



