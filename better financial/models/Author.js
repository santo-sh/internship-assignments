const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author;