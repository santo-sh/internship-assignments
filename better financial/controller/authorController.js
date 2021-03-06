const bookService = require('../service/bookService');
const authorService = require('../service/authorService');
const addAuthor = async(req, res) => {
    try{
        const payload = req.body;
        console.log(payload);
        if(!(payload && payload.name)){
            throw {status: false, message: "Author name is required!!!"};
        }
        payload.name = payload.name.toLowerCase();
        const status = await authorService.addAuthor({name: payload.name});
        if(!status){
            throw {status: false, message: "Unable to save Author!!!"};
        }
        return res.json({status: false, message: "Author saved successfully!!!"});
    }catch(err){
        return res.json({status: false, message: err.message});
    }
}

const deleteAuthor = (req, res) => {
    res.json({status: true, message: "Deleting author"});
}

const updateAuthor = async(req, res) => {
    try{
        const payload = req.body;
        console.log(payload);
        if(!(payload && payload.old_name && payload.update)){
            throw {status: false, message: "old_name and update are mandatory fields!!!"}
        }
        payload.old_name = payload.old_name.toLowerCase();
        payload.update = payload.update.toLowerCase();
        const status = await authorService.updateAuthor({name:payload.old_name}, {name: payload.update});
        if(!status){
            throw {status: true, message: "Unable to update author!!!"};
        }

        return res.json({status: true, message: "Author updated successfully"});
    }catch(err){
        return res.json({status: false, message: err.message});
    }
}


const listPublications = async(req, res) => {
    try{
        let query = req.query;
        if(!(query && query.author_name)){
            throw {status: false, message: "Author name not specified!!!"};
        }
        
        let author = await authorService.findAuthor({name: query.author_name});
        if(!author){
            throw {status: false, message: "Author not present in database!!"};
        }
        let books = await bookService.findByAuthorId(author._id).sort({'publication_year': -1});
        if(books.length === 0){
            return res.json({status: true, message: "Author has not pubilshed any book!!"});
        }
        return res.json({status: true, message: "Listing all the publications of the user!!!", data: books})
    }catch(err){
        return res.json({stauts: false, message: err.message})
    }
}

const listAllPublications = async(req, res) => {
    try{
        const data = await bookService.listAll({});
        return res.json({status:false, data: data})       
    }catch(err){
        return res.json({status: false, message: err.message})
    }
}


module.exports = {
    addAuthor, 
    deleteAuthor,
    updateAuthor,
    listAllPublications,
    listPublications
}