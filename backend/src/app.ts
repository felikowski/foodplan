import express from 'express';
const api = require('./routes/api');
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors');

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

async function asyncFunction(): Promise<string> {
    const mariadb = require('mariadb');
    const pool = mariadb.createPool({
        host: 'localhost',
        user: 'foodplan_user',
        password: 'foodplan',
        database: 'foodplan',
        connectionLimit: 5
    });
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM recipe");
        return rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        if (conn) conn.end();
        console.log('connection closed');
    }
}
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});