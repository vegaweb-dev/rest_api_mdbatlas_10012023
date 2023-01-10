const { Router } = require('express');
const router = Router();
<<<<<<< HEAD
=======
const userSchema = require('../models/user');
>>>>>>> feat/workingbranch

router.get('/', (req, res) => {
  res.send('sending a string from user.js file');
});

<<<<<<< HEAD
=======
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
>>>>>>> feat/workingbranch
module.exports = router;
