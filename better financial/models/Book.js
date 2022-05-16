const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    book_name: {
        type: String, 
        required: true,
        trim: true,
    },
    publication_year: {
        type: String,
        required: true,
        trim: true,
    },
    book_type: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'Author',
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    }
});

const Book = mongoose.model('Book', BookSchema);
module.exports  = Book;