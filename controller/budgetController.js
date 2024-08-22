import Budget from "../model/budgetModel.js";

const createBudgetController = async(req, res) => {
    try{
        const budget = new Budget(req.body);
        const result = await budget.save();
        if(result){
            res.send({status : true})
        }else{
            res.send({status : false})
        }
    }catch(error)  {
        res.send({status:false, error})
    }
}

const getBudgetController = async(req, res) => {
    try{
        const budget = await Budget.find().populate('expenses').sort({ createdAt: -1 });
        if(budget){
            console.log(budget)
            res.send(budget)
        }else{
            res.send({status:false})
        }
    }catch(error){
        res.send({status:false, error})
    }
}
const getSelectedBudget = async(req, res) => {
    const { budgetId } = req.params;
    console.log(budgetId);
    try{
        const budget = await Budget.findOne({_id:budgetId}).populate('expenses');
        if(budget){
            res.send(budget)
        }else{
            res.send({status:false})
        }
    }catch(error){
        res.send({status:false, error})
    }
}

const updateBudget = async(req, res) => {
    const budgetId = req.params.budgetId;
    try{
        const updBudget = await Budget.updateOne({_id:budgetId},{$set:{...req.body}});
        if(updBudget){
            res.send({status : true})
        }else{
            res.send({status:false})
        }
    }catch(error){
        res.send({status:false, error})
    }
}
const deleteBudget = async(req, res) => {
    const budgetId = req.params.budgetId;
    try{
        const dltBudget = await Budget.deleteOne({_id:budgetId});
        if(dltBudget){
            res.send({status : true})
        }else{
            res.send({status:false})
        }
    }catch(error){
        res.send({status:false, error})
    }
}

export { createBudgetController, getBudgetController, updateBudget, deleteBudget, getSelectedBudget};