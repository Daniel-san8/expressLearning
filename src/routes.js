const { Router } = require("express");
const ContactController = require("./app/controllers/Contact.Controller")
const router = Router();

router.get("/contacts", ContactController.index);
router.get("/contacts/:id", ContactController.show)

module.exports = router; 