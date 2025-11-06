const Post= require('../models/postModel');
const User= require('../models/userModel');
exports.postLogic= async function(req,res){
      const {usrId}=req.params;
      const {title,content}=req.body;
      const isUsr= User.findOne({_id:usrId});
      if(!isUsr)return res.status(403).send('such user does not exist');

      const post= await Post.create({title,content,user:usrId});
      console.log('post created successfully');
      res.status(200).send(post);
}

exports.getPosts= async function(req,res){
      const {usrId}= req.params;
      const isuser= await User.findOne({_id:usrId});
      if(!isuser)return res.status(400).send('Invalid user details');

      const allPosts= await Post.find({user:usrId}).populate('user');
      console.log(allPosts);
      const result= allPosts.map( (obj)=>{

            return {
                  name:obj.user.name,
                  title:obj.title
            }
      });
      console.log('all posted posts are ready for the user');
      res.send(result);
}