const User= require('../models/userModel');

exports.userLogic= async function(req,res){
const {name,email} = req.body;

const isUser= await User.findOne({name,email});
if(isUser) return res.status(403).send('user already exists');

const user= await User.create({name,email});
console.log('user created '+user.name);
res.status(200).send(user);
}