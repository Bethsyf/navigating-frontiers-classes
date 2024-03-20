import express from 'express';

const PORT = 3000;

const app = express();

const ShoppingList = ['Milk', 'Bread', 'Eggs', 'Tomatoes'];

app.use(express.json());

app.get('/shopping-list', (req, res) => {
  const resBody = { ShoppingList };
  res.status(200).send(resBody);
});

app.post('/shopping-list', (req, res) => {
  const { item } = req.body;
  if (!item) {
    res.status(400).send({ error: "Bad Request: missing 'item' property" });
  }
  if (ShoppingList.includes(item)) {
    res.status(409).send({ error: 'Item already exists in the list' });
  }
  ShoppingList.push(req.body.item);
  const resBody = { ShoppingList };
  res.status(201).send(resBody);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT} 🚀`);
});
