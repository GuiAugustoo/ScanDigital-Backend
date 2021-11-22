const mongoose = require('../config/database'); 
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    email: { type: String, required: true },  
    password: { type: String, required: true }, 
    company_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'CompanyModel', 
        require: true,
    },
    contract_id: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'ContractModel', 
        require: true,
    },
    admin: { type: Boolean, required: true, default: false },
    created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User', UserSchema);