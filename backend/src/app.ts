import express from 'express';
const api = require('./routes/api');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-cmwnq-gx.us.auth0.com/.well-known/jwks.json"
  }),
  issuer: 'https://dev-cmwnq-gx.us.auth0.com/',
  algorithms: ['RS256']
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.use( express.static(path.join(__dirname, '../../frontend/dist')));
app.use('/api', authCheck, api);


app.use('*', (req, res) => {
    const indexPath = path.join(__dirname, '../../frontend/dist/index.html');
    console.log(indexPath);
    res.sendFile(indexPath);
  });

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});





