const { Books } = require("../database/connection")

exports.addBook = async (req, res) => {


    try {
        const { title, author, publication, price, description } = req.body
        
        // const fileName = req.file?.filename || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww";
        const fileName = req.file ? req.file.filename : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"

        if (!title | !author | !publication | !price | !description) {
            return res.status(400).json({
                message: "Please!  insert title, author, publication, price, description"
            })
        }
        const newData = await Books.create({
            title, author, publication, price, description, image: fileName
        })

        res.status(201).json({
            message: 'Book created successfully',
            data: newData

        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Failed to create book',
        });
    }

}
exports.fetchBooks = async (req, res) => {
    try {

        const existedData = await Books.findAll()
        if (existedData.length === 0) {
            return res.status(404).json({
                message: "Book not found"
            })
        }
        res.status(200).json({
            message: "Books fetched successfully",
            data: existedData
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Failed to fetch book',
        });

    }

}
exports.fetchBook = async (req, res) => {
    const { id } = req.params

    try {
        const existedData = await Books.findOne({
            where: {
                id
            }
        })
        if (!existedData) {
            return res.status(404).json({
                message: "Book not found"
            })
        }
        res.status(200).json({
            message: "Book fetched successfully",
            data: existedData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to fetch books"
        })
    }
}
exports.updateBookById = async (req, res) => {
    const { id } = req.params
    const updates = req.body
    try {
        const existedData = await Books.findByPk(id)
        if (!existedData) {
            return res.status(404).json({
                message: 'Book not found'
            })
        }
        await existedData.update(updates)

        res.status(200).json({
            message: "Book updated successfully",
            data: existedData
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error'
        })
    }
}

exports.deleteBook = async (req, res) => {
    const { id } = req.params
    try {
        const existedData = await Books.findByPk(id)
        if (!existedData) {
            return res.status(404).json({
                message: 'Book not found'
            })
        }

        await existedData.destroy()
        res.status(200).json({
            message: "Book deleted successfully"
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error'
        })
    }
}




