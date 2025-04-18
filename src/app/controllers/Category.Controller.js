const CategoriesRepository = require("../repositories/CategoryRepositories")

class CategoryController {
    async index (request, response) {
        const rows = await CategoriesRepository.findAll();

        response.json(rows);
    }
    async store (request, response) {

        const { name } = request.body;

        if(!name) {
            return response.status(400).json({ error: "Name is required" });
        };
        const category = await CategoriesRepository.create(name);
        response.json(category);
    }
}


module.exports = new CategoryController();