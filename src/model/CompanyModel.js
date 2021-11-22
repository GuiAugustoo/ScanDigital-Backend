const mongoose = require('../config/database'); 
const Schema = mongoose.Schema; 

const CompanySchema = new Schema({
    name: { type: String, required: true }, 
    cnpj: { type: String, required: true },
});

module.exports = mongoose.model('Company', CompanySchema);