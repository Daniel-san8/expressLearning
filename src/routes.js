const { Router } = require("express");
const ContactController = require("./app/controllers/Contact.Controller");
const CategoryController = require("./app/controllers/Category.Controller");
const router = Router();

router.get(
    "/contacts",
    (request, response, next) => {
        request.appId = "meuAppId";
        next();
    },
     ContactController.index
    );
router.get("/contacts/:id", ContactController.show);
router.delete("/contacts/:id", ContactController.delete);
router.post("/contacts", ContactController.store);
router.put("/contacts/:id", ContactController.update);

router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);

module.exports = router; 