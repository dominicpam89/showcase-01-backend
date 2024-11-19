const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.APP_PORT || 3000

const jsonErrorHandler = (err, res, message="Some error occured while fetch data")=>{
   if(err){
       res.status(500).send({error: true, message})
   }
}

app.get("/api/users", (_, res)=>{
    const filePath = path.join(__dirname, "src/dummy/users.json")
    res.sendFile(filePath, (err)=>jsonErrorHandler(err, res, "Unable to get users data"))
})

app.get("/api/products", (_, res)=>{
    const filePath = path.join(__dirname, "src/dummy/products.json")
    res.sendFile(filePath, (err)=>jsonErrorHandler(err, res, "Unable to get products data"))
})

app.listen(PORT, ()=>{
    console.log(`Running on PORT: ${PORT}`)
})