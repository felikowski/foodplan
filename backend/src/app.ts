import express from 'express';
var cors = require('cors');

const app = express();
const port = 3000;
app.use(cors())
app.get('/', async (req, res) => {
    console.log('request came in');
    res.send(await asyncFunction());
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