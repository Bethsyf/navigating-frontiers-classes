const express = require('express');
const cors = require('cors');

const petDB = [
  {
    name: 'sorpresa',
    color: 'white',
    weight: 1500,
  },
  {
    name: 'pequita',
    color: 'black',
    weight: 1500,
  },
];

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/pets', (req, res) => {
  return res.json(petDB);
});

app.get('/pets/:name', (req, res) => {
  const petName = req.params.name;
  const foundPet = petDB.find((pet) => pet.name === petName);
  res.json(foundPet);
});

app.post('/pets', (req, res) => {
  const pet = req.body;

  const petName = pet.name;

  console.info('input pet', pet);

  const alreadyThere = petDB.some((pet) => pet.name === petName);
  if (alreadyThere) {
    res.status(409);
    return;
  }
  petDB.push({
    name: pet.name,
    qty: pet.qty,
  });
  res.status(201).json(pet);
});

app.listen(port, () => console.info(`up and running at port=${port}`));
