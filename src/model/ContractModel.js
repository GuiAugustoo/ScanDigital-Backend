const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ContractSchema = new Schema({
    duration: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    active: { type: Boolean, require: true, },
    company: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'CompanyModel', 
        require: true,
    },   
});

module.exports = mongoose.model('Contract', ContractSchema);