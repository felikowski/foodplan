import express from 'express';
const api = require('./routes/api');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.use( express.static(path.join(__dirname, '../../frontend/dist')));
app.use('/api', api);
app.use('*', (req, res) => {
    const indexPath = path.join(__dirname, '../../frontend/dist/index.html');
    console.log(indexPath);
    res.sendFile(indexPath);
  });

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});