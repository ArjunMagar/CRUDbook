exports.fetchBooks = (req, res) => {
    const { Title, Author, Publication, Price, Description } = req.body

    res.json({
        message: "fetch books successfully"
    })


}
exports.addBooks = async (req, res) => {
    const { Title, Author, Publication, Price, Description } = req.body
    if (!Title | !Author | !Publication | !Price | !Description) {
        return res.status(400).json({
            message: "Please! Insert Title,Author,Publication,Price,Description"
        })
    }
    await 


    res.json({
        message: "fetch books successfully"
    })


}




