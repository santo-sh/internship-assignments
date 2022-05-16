const Author = require('../models/Author');


const addAuthor = async(obj) => {
    try{
        const newAuthor = await Author(obj).save();
    }catch(err){
        console.log(err);
    }
}

const updateAuthor = async(query, update) =>{
    try{
        const updatedAuthor = await Author.findOneAndUpdate(query, update);
    }catch(err){
        console.log(err);
    }
}

const findAuthor = (query) => {
    return Author.findOne(query).lean();
}

// can be added later
const deleteAuthor = async(obj) => {

}

module.exports = {
    addAuthor,
    updateAuthor,
    findAuthor
}