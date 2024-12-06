import express from 'express';
import cors from 'cors';
import { ProductRouter } from './routes/product';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());
app.use('/api/v1', ProductRouter );



app.listen(3000, () => (
    console.log(`server is running on ${PORT}`)
))