const db = require("../../database")

class CategoryController {
    async findAll() {
        const rows = await db.query(`
                SELECT name
                FROM categories
            `);
        return rows
    }

    async create (name) {
        const [ row ] = await db.query(`
                INSERT INTO categories (name)
                VALUES ($1)
                RETURNING *
            `, [name]);

            return row
    }
}

module.exports = new CategoryController();