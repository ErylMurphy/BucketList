// Get the express module.
const express = require('express');
// Create a new Express application (web server)
const app = express();

const Item = require('./models/Item');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// Set the port based on the environment variable (PORT=8080 node server.js)
// and fallback to 4567
const PORT = process.env.PORT || 4567;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.get("/homepage", (request, response) => {
  Item.all()
    .then(items => {
      const templateData = {};
      templateData.items = items;
      response.render("homepage", templateData);
    })
});

app.post("/homepage", (request, response) => {
  const newItem = request.body;
  Item.create(newItem)
    .then(item => {
      response.redirect(302, "/homepage")
    });
});

app.delete("homepage", (request, response) => {
  const id = Number(request.body.id);
  Item.delete(id)
    .then(() => {
      response.redirect(302, "/homepage");
    })
});

app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});