const { Router } = require("express");
const router = Router();
const booksCtrl = require("../controller/books.controller");

router.get("/books", booksCtrl.getAllBooks);
router.get("/books/:id", booksCtrl.getBook); // UTILIZANDO PARAMS

router.post("/books", booksCtrl.postBook);
router.put("/books", booksCtrl.putBook);
router.delete("/books", booksCtrl.deleteBook);

module.exports = router;