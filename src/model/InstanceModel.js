const mongoose = require('../config/database'); 
const Schema = mongoose.Schema; 

const InstanceSchema = new Schema({
    name: { type: String, required: true }, 
    url: { type: String, required: true }, 
    password: { type: String, required: true }, 
    contract_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'ContractModel', 
        require: true,
    },
});

module.exports = mongoose.model('Instance', InstanceSchema);