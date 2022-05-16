const { Router } = require("express");
const {addAuthor, updateAuthor, listAllPublications, listPublications} = require('../controller/authorController');
const router = Router();

router.post('/addAuthor', addAuthor);
router.post("/updateAuthor", updateAuthor);
router.get("/listPublications", listPublications);
router.get("/listAllPublications", listAllPublications);

module.exports = router;