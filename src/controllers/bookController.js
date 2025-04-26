const { books } = require("../database/connection")

exports.fetchBooks = (req, res) => {
    const { Title, Author, Publication, Price, Description } = req.body

    res.json({
        message: "fetch books successfully"
    })


}
exports.addBooks = async (req, res) => {
    try {
        const { title, author, publication, price, description } = req.body
        if (!title | !author | !publication | !price | !description) {
            return res.status(400).json({
                message: "Please!  insert title, author, publication, price, description"
            })
        }
        const newBook = await books.create({
            title, author, publication, price, description
        })

        res.status(201).json({
            message: 'Book created successfully',
            data: newBook

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Failed to create book',
        });
    }

}




