import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import resumeRouter from './routes/resumeRoutes.js';
import aiRouter from './routes/aiRoutes.js';

// Database connection
await connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

const corsOptions = {
  origin: ['https://resume-labs.vercel.app', 'http://localhost:5173'],
  credentials: true
};
app.use(cors(corsOptions));

app.get('/', (req,res)=> res.send("Server is here..."))
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/ai', aiRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}\n click http://localhost:3000`);
})