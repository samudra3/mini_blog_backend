require('dotenv').config();
require('./config/db');
const express= require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user',require('./routes/userRoutes'));
app.use('/posts',require('./routes/postRoutes'));

app.use((req,res)=>{
      res.status(404).send("not found");
})

app.listen(PORT,()=>console.log('listening successfully'));