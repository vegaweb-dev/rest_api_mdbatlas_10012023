const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//Set port
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

//Routes
app.get('/', (req, res) => {
  res.send('sending string through get route');
});
//Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log('connected to database'))
  .catch((err) => {
    console.error(err);
  });

//Start Server
app.listen(app.get('port'), () => {
  console.log(`Server On Port ${app.get('port')}`);
});
