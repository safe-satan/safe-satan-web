const path = require("path");
const express = require("express");
const app = express(); // create express app
const port = process.env.PORT ?? 3000;

app.use('/', express.static('build'))

// start express server on port 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});