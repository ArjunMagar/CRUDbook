const bookController = require("../controllers/bookController")

const router = require("express").Router()


router.route('/').get(bookController.fetchBooks)


module.exports = router

