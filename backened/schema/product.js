const db=require("mongoose")

const productSchema=new db.Schema({
    product_id:String,
    product_type:String,
    product_name:String,
    product_price:Number,
    available_quantity:Number
})

const productModel=db.model("productdata",productSchema)

module.exports=productModel