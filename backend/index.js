import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()
const PORT = process.env.PORT

app.get('/', (req,res)=>{
    res.json({
        message: `Dummy Endpoint`
    })
})

app.listen(PORT, ()=>console.log('Server Started...'))