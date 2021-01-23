export default class dbWrapper {
    pool;
    constructor() {
        const mariadb = require('mariadb');
        this.pool = mariadb.createPool({
            host: 'localhost',
            user: 'foodplan_user',
            password: 'foodplan',
            database: 'foodplan',
            connectionLimit: 5
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
            if (conn) conn.end();
            console.log('connection closed');
        }        
    }
    async getAllRecipes(): Promise<String> {
        const query = "SELECT * FROM recipe";
        return await this.executeQuery(query);
    }
    async getSingleRecipe(id: number): Promise<String> {
        const query = `SELECT * FROM recipe WHERE id = ${id};`;
        return await this.executeQuery(query);
    }
}

