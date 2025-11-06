const {postLogic,getPosts}= require('../controllers/postController');
const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
      res.send('welcome to the post route');
})

router.get('/:usrId/posts',getPosts);
router.post('/:usrId/posts',postLogic);

module.exports= router;