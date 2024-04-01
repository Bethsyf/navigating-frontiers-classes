const express = require('express');
const cors = require('cors');
const petRouter = require('./routes/pets');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(petRouter);

app.listen(port, () => console.info(`up and running at port=${port}`));
