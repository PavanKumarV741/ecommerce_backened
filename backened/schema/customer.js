const db=require("mongoose")

const customerSchema=new db.Schema({
    customer_id:String,
    customer_name:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    balance:Number
})

const customerModel=db.model("customerdata",customerSchema)

module.exports=customerModel