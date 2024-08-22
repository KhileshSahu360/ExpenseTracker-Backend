import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURL = process.env.DB_URL;

mongoose.connect(dbURL)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((error)=>{
    console.log('MongoError ',error);
})