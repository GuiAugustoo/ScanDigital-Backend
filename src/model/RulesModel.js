const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RulesSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    active: { type: Boolean, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'CategoriesModel', 
        require: true,
    },
    classification: { type: String, require: true, },
    linkDocumentation: { type: String, required: true },
    message: { type: String, required: true },
    scriptRule: { type: String, required: true },
    severity: { type: String, required: true },
    suggestion: { type: String, required: true },
    tableName: { type: String, required: true },
    why: { type: String, required: true },

});

module.exports = mongoose.model('Rules', RulesSchema);