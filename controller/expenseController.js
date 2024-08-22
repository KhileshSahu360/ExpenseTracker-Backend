import Expense from "../model/expensesModel.js";
import Budget from "../model/budgetModel.js";

const addExpense = async(req, res) => {
    const budgetId = req.params.budgetId;
    try{    
        const result = new Expense(req.body);
        const newExpense = await result.save();
        if(newExpense){
            const addExpToBud = await Budget.updateOne({_id:budgetId}, {$push : {expenses : newExpense._id}}) 
            if(addExpToBud){
                res.send({status:true});
            }else{
                res.send({status:false});
            }
        }else{
            res.send({status:false});
        }
    }catch(error){
        res.send({status:false,error});
    }
}
const deleteExpense = async(req, res) => {
    const expenseId = req.params.expenseId;
    const budgetId = req.params.budgetId;
    try{
        const result = await Expense.deleteOne({_id:expenseId});
        if(result){
            const result2 = await Budget.updateOne({_id:budgetId},{$pull : {expenses : expenseId}});
            if(result2){
                res.send({status:true});
            }else{
                res.send({status:false});
            }
        }else{
            res.send({status:false});
        }
    }catch(error){
        res.send({status:false, error});
    }
}

const getExpenses = async(req, res) => {
    try{
        const expense = await Expense.find().sort({ createdAt: -1 });
        if(expense){
            res.send(expense)
        }else{
            res.send({status:false})
        }
    }catch(error){
        res.send({status:false, error})
    }
}

export {addExpense, deleteExpense, getExpenses};
