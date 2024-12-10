import express from 'express';
import {router} from './src/Routes/routes';
import { serve, setup } from 'swagger-ui-express';
import dotenv from 'dotenv';
import { parseDocument } from 'yaml';
import { readFileSync } from 'fs';
dotenv.config();
const app = express();

//TOI TU RESTE LA ET TU BOUGE PAS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
app.use(express.json());
// -------------------------------------------------------------------

const port = process.env.PORT || 3000;
app.use('/', router)

app.use('/api_doc', serve, setup(parseDocument(readFileSync("./openapi.yml").toString())));

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
