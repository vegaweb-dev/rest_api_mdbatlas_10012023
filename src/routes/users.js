const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('sending a string from user.js file');
});

module.exports = router;
