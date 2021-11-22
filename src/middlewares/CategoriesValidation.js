const CategoriesModel = require('../model/CategoriesModel');

const CategoryValidation = async (req, res, next) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'name é obrigatório' });

    } else {

        let exists;

        exists = await CategoriesModel.
            findOne(
                {
                    'name': { '$eq': name }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma categoria cadastrada com este nome!' });
        }
        next();
    }
}

module.exports = CategoryValidation;