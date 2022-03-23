const express = require('express');

const app = express();

/*
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({'errors': {
      message: err.message,
      error: {}
    }});
});*/

app.listen(3000, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Your server is ready !`);
});
