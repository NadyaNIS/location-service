const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');
const locationController = require("./controllers/LocationController");
require("./config/db");

const { PORT = 5004 } = process.env;


app.get('/', function (req, res) {
  res.send('Location Service')
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/location-service/:lat/:long")
  .get(locationController.getLocation)


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
