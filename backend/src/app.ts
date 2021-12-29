import express from 'express';
const api = require('./routes/api');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-cmwnq-gx.us.auth0.com/.well-known/jwks.json'
}),
audience: 'http://localhost:3000/api',
issuer: 'https://dev-cmwnq-gx.us.auth0.com/',
algorithms: ['RS256']
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.use(express.static(path.join(__dirname, '../../../frontend/dist')));
app.use('/api', jwtCheck, api);
app.use('*', (req, res) => {
    const indexPath = path.join(__dirname, '../../../frontend/dist/index.html');
    res.sendFile(indexPath);
  });

app.listen(port, () => {
    return console.log(`API server is listening on ${port}`);
});