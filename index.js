const express = require('express');
const bodyParser = require('body-parser');

const contactRoute = require('./routes/contact');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/contact', contactRoute);

app.listen(PORT, () => {
  console.log(`Contacts server listening on port ${PORT}.`);
});
