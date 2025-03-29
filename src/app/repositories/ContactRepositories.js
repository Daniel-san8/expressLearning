const { uuid } = require("uuidv4")

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
    findAll () {
        return new Promise ((resolve) => resolve(contacts));
    }

    findById (id) {
        const contact = contacts.find(contact => contact.id === id);

        if(!contact) return false;
        return new Promise((resolve) => resolve(contact));
    }

    delete (id) {
        contacts = contacts.filter(contact => contact.id !== id);
        return new Promise((resolve) => resolve(contacts));
    }
}

module.exports = new ContactRepository();