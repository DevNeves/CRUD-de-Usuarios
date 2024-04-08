const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const connection = require('./database/database');
const usersController = require('./users/usersController');

app.use('/', usersController);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server rodando');
});
