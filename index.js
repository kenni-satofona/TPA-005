const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

const authController = require('./controllers/authController');
const todoController = require('./controllers/todoController');

app.use('/auth', authController);
app.use('/todos', todoController);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
