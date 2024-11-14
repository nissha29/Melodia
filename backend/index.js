import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connect.db.js'
import userRouter from './routes/user.route.js'

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT

app.use('/user', userRouter)

// app.get('/', (req,res)=>{
//     res.json({
//         message: `Dummy Endpoint`
//     })
// })

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
   }
)