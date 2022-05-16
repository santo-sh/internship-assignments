const Author = require('../models/Author');


const addAuthor = async(obj) => {
    try{
        const newAuthor = await Author(obj).save();
        return true;
    }catch(err){
        console.log(err);
        return false;
    }
}

const updateAuthor = async(query, update) =>{
    try{
        const updatedAuthor = await Author.findOneAndUpdate(query, update);
        return true;
    }catch(err){
        console.log(err);
        return false;
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