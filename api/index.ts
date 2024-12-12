import dotenv from 'dotenv';
import express from 'express';
import { serve, setup } from 'swagger-ui-express';
import { parseDocument } from 'yaml';
import { rentalRouter } from './src/Routes/RentalRoutes';
import { userRouter } from './src/Routes/UserRoutes';
import { readFileSync } from 'fs';
import cors from 'cors';
dotenv.config();
const app = express();

//TOI TU RESTE LA ET TU BOUGE PAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(express.json());
app.use(cors());
// -------------------------------------------------------------

const port = process.env.PORT || 3000;
app.use('/api_doc', serve, setup(parseDocument(readFileSync("./openapi.yml").toString())));
app.use('/', userRouter);
app.use('/', rentalRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
export {app};