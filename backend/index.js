import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './db/connect.db.js'
import userRouter from './routes/user.route.js'
import trackRouter from './routes/track.route.js'
import interactionRouter from './routes/interaction.route.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT

const allowedOrigins = ['http://localhost:5176'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRouter);
app.use('/api/track', trackRouter);
app.use('/api/interaction', interactionRouter);

app.listen(PORT, async()=>{
    await connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
   }
)