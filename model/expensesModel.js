import mongoose, { mongo } from 'mongoose';

const expenseSchema = new mongoose.Schema({
    expenseName : {
        type : String,
        required : true
    },
    expenseAmount : {
        type : Number,
        required : true
    }
},{timestamps:true});

const Expense = mongoose.model('expenses',expenseSchema);

export default Expense;
