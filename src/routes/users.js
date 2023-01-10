const { Router } = require('express');
const router = Router();
const userSchema = require('../models/user');

router.get('/', (req, res) => {
  res.send('sending a string from user.js file');
});

router.post('/api/post', (req, res) => {
  const user = userSchema(req.body);
  console.log(user);
  user
    .save()
    .then(console.log('saved'))
    .catch((err) => {
      console.log(err);
    });
  res.json(user);
});
module.exports = router;
