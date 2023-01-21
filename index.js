import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import PostSchema from './mongodb/models/post.js';
import postRoutes from './routes/postRotes.js';
import fenilRoutes from './routes/fenilRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/fenil', fenilRoutes);

app.get('/', async (req, res) => {
    res.send('Hello World!');
}
);


const startServer = async () => {

    try {
        connectDB(process.env.MONGO_URL)
    } catch (error) {
        
    }

    app.listen(8000, () => {
        console.log('Server started on port 8000 ok');
    });
};

startServer();