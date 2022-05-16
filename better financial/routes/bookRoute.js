const { Router } = require("express");
const router = Router();
const {addBook, deleteBook} = require('../controller/bookController');

router.post("/addBook", addBook);
router.get('/deleteBook', deleteBook);

module.exports = router;