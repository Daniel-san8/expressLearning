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

    store () {

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