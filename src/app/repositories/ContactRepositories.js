const { uuid } = require("uuidv4");
const db = require("../../database");
// Fquery("SELECT * FROM contacts").then(console.log);

let contacts = [
    {
        id: uuid(),
        name: "Daniel Brigidia",
        email: "danielgdt88@hotmail.com",
        phone: "123456789",
        category_id: uuid()
    },
    {
        id: uuid(),
        name: "Daniel Batista",
        email: "danielgdt88@hotmail.com",
        phone: "123456789",
        category_id: uuid()
    },
    {
        id: uuid(),
        name: "DBB",
        email: "danielgdt88@hotmail.com",
        phone: "123456789",
        category_id: uuid()
    }
]

class ContactRepository {
    async findAll (orderBy = "ASC") {
        const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
        const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
        return rows;
    }

    async findById (id) {
        const [ row ] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
        return row;
    }

    async findByEmail(email) {
        const [ row ] = await db.query("SELECT * FROM contacts WHERE email = $1", [email]);
        return row;
    }

    async create(newUser) {
        const [ row ] = await db.query(`INSERT INTO contacts(name, email, phone, category_id) VALUES ($1, $2, $3, $4) RETURNING *`, [newUser.name, newUser.email, newUser.phone, newUser.category_id]);

        return row;
    }

    delete (id) {
        contacts = contacts.filter(contact => contact.id !== id);
        return new Promise((resolve) => resolve(contacts));
    }

    update(id, newUser) {
        const updatedContact = {
            id,
            ...newUser
        }

        contacts = contacts.map(contact => contact.id === id ? updatedContact : contact)
        return new Promise(resolve => resolve(updatedContact));
    }
    
}

module.exports = new ContactRepository();