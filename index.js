const express = require("express")
const dummyUsers = require("./src/dummy/users.json")
const dummyProducts = require("./src/dummy/products.json")

const app = express()
const PORT = process.env.APP_PORT || 3000

app.get("/api/users", (_, res)=>{
    res.send({error:false, users: dummyUsers})
})

app.get("/api/users/:id", (req, res)=>{
    const {id} = req.params
    if(isNaN(id)) res.status(400).send({error:true, message:"Id must be number"})
    const user = dummyUsers.find(us=>us.id==id)
    if(!user) res.status(201).send({error:true, message:"User not found"})
    res.send({error:false, user})
})

app.get("/api/products", (_, res)=>{
    res.send({error:false, products: dummyProducts})
})

app.get("/api/products/:id", (req, res)=>{
    const {id} = req.params
    if(isNaN(id)) res.status(400).send({error:true, message:"Id must be number"})
    const product = dummyProducts.find(prod=>prod.id==id)
    if(!product) res.status(201).send({error:true, message:"Product not found"})
    res.send({error:false, product})
})

app.listen(PORT, ()=>{
    console.log(`Running on PORT: ${PORT}`)
})