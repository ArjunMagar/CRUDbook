const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Constructing the upload path
const uploadPath = path.join(__dirname, '..', 'uploads');

// Check/Ensuring if the 'uploads' directory/folder exists; if not, create it
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true }); // This creates the folder if it doesn't exist
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath)    // Saving files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname) // Naming the file with a timestamp
    }
})

module.exports = { multer, storage }