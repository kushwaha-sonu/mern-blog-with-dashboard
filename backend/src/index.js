import express from 'express';
import dotenv from 'dotenv';
import connectDB from './helper/dB.js';


const app = express();
app.use(express.json());
dotenv.config();



app.get('/', (req, res) => {
  res.send('Hello From Backend');
})






app.listen(process.env.PORT || 5000,(error)=>{
    if(error) return console.log(`Error: ${error}`);
    connectDB();
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
})

