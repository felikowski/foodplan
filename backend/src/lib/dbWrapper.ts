export default class dbWrapper {
    pool;
    constructor() {
        const mariadb = require('mariadb');
        this.pool = mariadb.createPool({
            host: 'localhost',
            user: 'foodplan_user',
            password: 'foodplan',
            database: 'foodplan',
            connectionLimit: 50
        });

    }
    async executeQuery(query: String) {
        let conn;
        try {
            conn = await this.pool.getConnection();
            const rows = await conn.query(query);
            return rows;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            if (conn) {
                conn.end().then(() => {
                    console.log('connection closed');
                }).catch(error => {
                    console.log('error while closing connection');
                });
            }
        }
    }
    async getAllRecipes(): Promise<String> {
        const query = "SELECT * FROM recipe";
        return await this.executeQuery(query);
    }
    async getSingleRecipe(id: number): Promise<String> {
        const query = `SELECT * FROM recipe WHERE id = ${id};`;
        const res = await this.executeQuery(query);
        console.log(res[0]);
        return res[0];
    }
}

