const bookController = require("../controllers/bookController")
const router = require("express").Router()
const{multer,storage} = require('../middleware/multerConfig')
const upload = multer({storage : storage})

router.route('/book').post(upload.single('image'),bookController.addBook).get(bookController.fetchBooks)
router.route('/book/:id').get(bookController.fetchBook).patch(bookController.updateBookById).delete(bookController.deleteBook)



module.exports = router

