// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();

const Item = require('./models/Item');
// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

app.set('view engine', 'ejs');

// Start the web server listening on the provided port.
app.listen(PORT, () => { 
  console.log(`Express web server listening on port ${PORT}`);
});

app.get("/", (request, response) => {
  Item.all() 
  .then(items => {
    const templateData = {};
    templateData.items = items;
    response.render('homepage', templateData);
  })
});

app.post('/', (request, response) => {
  const newItem = request.body;
  Item.create(newItem)
    .then(item => {
      response.redirect(302, '/homepage')
    });
})