import express from "express"

const PORT = 3000 
const = express()

let counterA = 0
let counter = 0

application.use(express.json())

application.get("/counterA", (req, res) =>{
    const resBody = { counterA };
  res.status(200).json(resBody);
})