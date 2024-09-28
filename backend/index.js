import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
import cookieparser from 'cookie-parser';
import path from 'path';

dotenv.config();
mongoose.connect(process.env.MONGO)
        .then(() =>{
            console.log("Conneted to MongoDB")
        })
        .catch((err)=>{
            console.log(err)
        });

const __dirname = path.resolve();

const app = express();

 app.use(express.static(path.join(__dirname,'client/dist')))
 app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist' ,'index.html'))
 })

app.use(express.json());

app.use(cookieparser());

app.listen(3000, ()=>{
    console.log('Server listening on port 300');
});

app.use("/backend/user",userRoutes);
app.use("/backend/auth",authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})