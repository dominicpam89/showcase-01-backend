const express = require("express")

const app = express()
const PORT = process.env.APP_PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Running on PORT: ${PORT}`)
})