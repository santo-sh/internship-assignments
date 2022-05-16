const Book = require('../models/Book');
const Author = require('../models/Author')

const addBook = async(obj) => {
    try{
        const newBook = await new Book(obj).save();
    }catch(err){
        console.log("Error:", err);
    }
}

// this can be used later.
const deleteBook = async(obj) => {
    
}

const listAll = (obj) => {
    try{
        return Book.find(obj).populate({path: 'author'}).lean();
    }catch(err){
        console.log("Error:", err)
    }
}

const findByAuthorId = (authorId) => {
    return Book.find({author: authorId}).lean();
}

module.exports = {
    addBook,
    listAll,
    findByAuthorId
}
