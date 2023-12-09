import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';

dotenv.config({ path: '../server/.env' })

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({message: 'Holaaa'});
})

app.use('/api/v1/users', userRouter);

const startServer = async () => {
    try{
        connectDB(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('Server started on port http://localhost:8080'))
    }catch(error){
        console.log(error);
    }
}

startServer();