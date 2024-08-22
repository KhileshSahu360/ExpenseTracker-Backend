import express from 'express'
import { addExpense, deleteExpense, getExpenses } from '../controller/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.post('/addexpenses/:budgetId',addExpense);
expenseRouter.get('/getexpenses',getExpenses);
expenseRouter.delete('/deleteexpenses/:expenseId/:budgetId',deleteExpense);

export default expenseRouter;