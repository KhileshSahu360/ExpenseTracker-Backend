import mongoose, { mongo } from 'mongoose';

const budgetSchema = new mongoose.Schema({
    budgetName : {
        type : String,
        required : true
    },
    budgetAmount : {
        type : Number,
        required : true
    },
    icon : {
        type : String,
        required : true
    },
    createdBy : {
        type : String,
        required : true
    },
    expenses : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'expenses',
            default : []
        }
    ],
},{timestamps:true})

const Budget = mongoose.model('budgets',budgetSchema);

export default Budget;