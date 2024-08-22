import express from 'express';
import cors from 'cors'
import './config.js'
import dotenv from 'dotenv';
import budgetRouter from './routes/budgetRoutes.js';
import expenseRouter from './routes/expenseRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('welcome to expense tracker')
})

app.use('/api/budget',budgetRouter);
app.use('/api/expense',expenseRouter);







app.listen(PORT,(req,res)=>{
    console.log(`Server Listen in port ${PORT}`);
})