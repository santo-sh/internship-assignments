const bookService = require('../service/bookService');
const authorService = require('../service/authorService');
const addBook = async(req, res) => {
    try{
        const payload = req.body;
        console.log(payload);
        if(!(payload && payload.book_name && payload.author && payload.publication_year && payload.book_type)){
            throw {status: false, message: "Some mandatory fields are missing!!"};
        }
        payload.author = payload.author.toLowerCase();

        let author = await authorService.findAuthor({name: payload.author});

        if(!author){
            await authorService.addAuthor({name: payload.author});
            author = await authorService.findAuthor({name: payload.author});
        }

        const newBook = {
            book_name: payload.book_name,
            author: author._id,
            publication_year: payload.publication_year,
            book_type: payload.book_type
        }

        const saved = await bookService.addBook(newBook);
        return res.json({status: true, message: "Book saved successfully!!!"});
    }catch(err){
        return res.json({status: false, message: err.message}); 
    }
}

const deleteBook  = (req, res) => {
    res.json({status: true, message: "deleting book!!"});
}

module.exports = {
    addBook, 
    deleteBook
}