const fs = require('fs');
const path = require('path');
const express = require('express');
const port = 4000;
const db = require('./db/mysql');
const bodyParser = require('body-parser')
var Movie = require('./model/Movie');


const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', '*');
  res.append('Access-Control-Allow-Headers', '*');
  next();
});


let dbCreateSchemaScript = fs.readFileSync(path.join(__dirname, '/db/MovieApp_create.sql')).toString();
console.log(`Attempt to run schema.sql...`);

// console.log(dbCreateSchemaScript);

db.query(dbCreateSchemaScript)
  .then( () => {
    return Movie.random(1);
  })
  .then(([Movie, metadata]) => {
    console.log(Movie);
  })
  .catch(err => {
    console.log(err);
  })
;

app.listen(port, () => {
    console.log(`Server is listetning on port ${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

var routes = require('./router/router.js');
routes(app);