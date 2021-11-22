const RulesModel = require('../model/RulesModel');

const RulesValidation = async (req, res, next) => {

    const { name, type, active, category, classification, linkDocumentation, message, scriptRule, severity, suggestion, tableName, why } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'name é obrigatório' });

    } else if (!type) {
        return res.status(400).json({ error: 'Type é obrigatório' });

    } else if (!active) {
        return res.status(400).json({ error: 'Active é obrigatório' });

    } else if (!category) {
        return res.status(400).json({ error: 'Category é obrigatório' });

    } else if (!classification) {
        return res.status(400).json({ error: 'classification é obrigatório' });

    }else if (!linkDocumentation) {
        return res.status(400).json({ error: 'Link Documentation é obrigatório' });

    }else if (!message) {
        return res.status(400).json({ error: 'Message é obrigatório' });

    }else if (!scriptRule) {
        return res.status(400).json({ error: 'Script Rule é obrigatório' });

    }else if (!severity) {
        return res.status(400).json({ error: 'Severity é obrigatório' });

    }else if (!suggestion) {
        return res.status(400).json({ error: 'Suggestion é obrigatório' });

    }else if (!tableName) {
        return res.status(400).json({ error: 'Table Name é obrigatório' });

    }else if (!why) {
        return res.status(400).json({ error: 'Why é obrigatório' });

    }else {

        let exists;

        exists = await RulesModel.
            findOne(
                {
                    'name': { '$eq': name }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma regra cadastrada com esse nome!' });
        }
        next();
    }
}

module.exports = RulesValidation;