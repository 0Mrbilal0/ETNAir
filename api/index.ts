import express from 'express';
import {router} from './src/routes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router)
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})