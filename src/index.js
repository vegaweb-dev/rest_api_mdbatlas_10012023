const express = require('express');
const app = express();
const morgan = require('morgan');

//Set port
app.set('port', process.env.PORT || 3000);

//Start Server
app.listen(app.get('port'), () => {
  console.log(`Server On Port ${app.get('port')}`);
});
