const ContactsRepository = require("../repositories/ContactRepositories");

class ContactController {
    async index (request, response) {
        response.json(await ContactsRepository.findAll())
    }

    async show (request, response) {
        const { id } = request.params;
        const contact = await ContactsRepository.findById(id);

        if(!contact) return response.status(404).json({ error: "User not found" });

        response.json(contact)
    }

    async store (request, response) {
        const { name, email, phone, category_id} = request.body;

        const contactExists = await ContactsRepository.findByEmail(email);

        if(contactExists) {
            return response.status(400).json({ error: "O email já existe"} );
        }

        const contact = await ContactsRepository.create({
            name, email, phone, category_id
        })

        response.json(contact)
    }

    update () {

    }

    async delete (request, response) {
        const { id } = request.params;
        let contact = await ContactsRepository.findById(id);

        if(!contact) return response.status(404).json({ error: "User not found" });

        ContactsRepository.delete(id)
        response.sendStatus(204);
    }
};

module.exports = new ContactController();