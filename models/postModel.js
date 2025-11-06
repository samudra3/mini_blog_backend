const mongoose= require('mongoose');
const {Schema}= mongoose;

const postSchema= new Schema({
      title:String,
      content:String,
      user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
      }
})

const Post= mongoose.model('Post',postSchema);

module.exports=Post;