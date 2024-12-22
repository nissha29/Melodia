import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './db/connect.db.js'
import userRouter from './routes/user.route.js'
import trackRouter from './routes/track.route.js'
import fs from 'fs/promises';

const app = express()
dotenv.config()
const PORT = process.env.PORT

const allowedOrigins = ['http://localhost:5173'];
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
app.use('/uploads', express.static('./uploads'));

app.use('/user', userRouter);
app.use('/track', trackRouter);

async function ensureDirectoryExistence() {
    const directories = ["uploads", "uploads/tracks", "uploads/images"];
    for (const dir of directories) {
        try {
            await fs.access(dir); 
        } catch (err) {
            try {
                await fs.mkdir(dir, { recursive: true });
            } catch (mkdirErr) {
                console.error(`Error creating directory: ${dir}`, mkdirErr);
                throw mkdirErr; 
            }
        }
    }
    console.log(`Directories are ready`);
}

app.listen(PORT, async()=>{
    await connectDB()
    await ensureDirectoryExistence();
    console.log(`Server started at http://localhost:${PORT}`)
   }
)