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

    findByEmail(email) {
        const contactExists = contacts.find(contact => contact.email === email);
        if(!contactExists) return false;

        return new Promise(resolve => resolve(true))
    }

    create(newUser) {
        contacts.push({
            id: uuid(),
            ...newUser,
        });
        return new Promise(resolve => resolve(newUser));
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