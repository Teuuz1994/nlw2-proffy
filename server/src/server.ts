import express from 'express';

import Routes from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(Routes);

app.listen(port, () => console.log('server is running...'));
