const express=require("express")
const app=express()
const db=require("mongoose")

const productModel=require("./schema/product")
const customerModel=require("./schema/customer")
const orderModel=require("./schema/order")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("hom")
})

app.post("/productdata",(req,res)=>{
    productModel.create({  
        product_id:req.body.product_id,
        product_type:req.body.product_type,
        product_name:req.body.product_name,
        product_price:req.body.product_price,
        available_quantity:req.body.available_quantity}).then((data)=>{
            res.send("product added successfully")
        }).catch((err)=>{
            console.log(err)
        })
})

app.post("/customerdata",(req,res)=>{
    customerModel.create({
        customer_id:req.body.customer_id,
        customer_name:req.body.customer_name,
        email:req.body.email,
        balance:req.body.balance
    }).then((data)=>{
        res.send("customer data added successfully")
    }).catch((err)=>{
        console.log(err)
    })
})

app.post("/orderdata",(req,res)=>{
    orderModel.create({
        customer_name:req.body.customer_name,
        product_id:req.body.product_id,
        product_name:req.body.product_name,
        quantity:req.body.quantity
    }).then((data)=>{
        res.send("orderdata added successfully")
    }).catch((err)=>{
        console.log(err)
    })
})

app.get("/productdata",async (req,res)=>{
    try{
        const data=await productModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/customerdata",async (req,res)=>{
    try{
        const data=await customerModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/productdata/:product_id",async (req,res)=>{
    try{
        const data=await productModel.findOne({product_id:req.body.product_id})
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/orderdata/:order_id",async (req,res)=>{
    try{
        const data=await orderModel.findOne({order_id:req.body.order_id})
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/customerdata/:customer_id",async (req,res)=>{
    try{
        const data=await customerModel.findOne({customer_id:req.body.customer_id})
        res.send(data)
    }
    catch(err){
        console.log(err)
    }
})

app.put("")

const port=3000
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})

db.connect("mongodb://localhost/ecommerce_backened",()=>{
    console.log("connected to db")
})