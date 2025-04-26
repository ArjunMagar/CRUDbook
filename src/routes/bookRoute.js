const bookController = require("../controllers/bookController")

const router = require("express").Router()


router.route('/book').post(bookController.addBook).get(bookController.fetchBooks)
router.route('/book/:id').get(bookController.fetchBook).patch(bookController.updateBookById).delete(bookController.deleteBook)



module.exports = router

