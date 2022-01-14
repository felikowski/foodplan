import express from 'express';

import path from 'path';
import bodyParser from 'body-parser';
import jwt from 'express-jwt';
import jwks from 'jwks-rsa';
import api from './routes/api';

const app = express();

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-cmwnq-gx.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'http://localhost:3000/api',
  issuer: 'https://dev-cmwnq-gx.us.auth0.com/',
  algorithms: ['RS256'],
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.use(express.static(path.join(__dirname, '../../build/frontend/dist')));
app.use('/api', jwtCheck, api);
app.use('*', (req, res) => {
  const indexPath = path.join(__dirname, '../../build/frontend/dist/index.html');
  res.sendFile(indexPath);
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API server is listening on ${port}`));
