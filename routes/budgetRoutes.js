import express from 'express'
import { createBudgetController, deleteBudget, getBudgetController, getSelectedBudget, updateBudget } from '../controller/budgetController.js';

const budgetRouter = express.Router();

budgetRouter.post('/createbudget', createBudgetController);
budgetRouter.get('/getbudget', getBudgetController);
budgetRouter.put('/updatebudget/:budgetId', updateBudget);
budgetRouter.delete('/deletebudget/:budgetId', deleteBudget);
budgetRouter.get('/getselectedbudget/:budgetId', getSelectedBudget);

export default budgetRouter;

