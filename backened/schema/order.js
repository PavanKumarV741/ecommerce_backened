const db=require("mongoose")

const orderSchema=new db.Schema({
    customer_id:String,
    product_id:String,
    product_name:String,
    quantity:Number
})

const orderModel=db.model("orderdata",orderSchema)

module.exports=orderModel