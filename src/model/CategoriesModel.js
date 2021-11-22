const mongoose = require('../config/database'); 
const Schema = mongoose.Schema; 

const CategoriesSchema = new Schema({
    name: { type: String, required: true }, 
});

module.exports = mongoose.model('Categories', CategoriesSchema);