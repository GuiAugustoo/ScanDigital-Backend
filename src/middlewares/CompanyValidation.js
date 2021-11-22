const CompanyModel = require('../model/CompanyModel');

const CompanyValidation = async (req, res, next) => {

    const { name, cnpj } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'name é obrigatório' });

    } else if (!cnpj) {
        return res.status(400).json({ error: 'CNPJ é obrigatório' });
    } else {

        let exists;

        exists = await CompanyModel.
            findOne(
                {
                    'cnpj': { '$eq': cnpj }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma empresa cadastrada com este CNPJ!' });
        }
        next();
    }
}

module.exports = CompanyValidation;