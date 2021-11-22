const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

    const { email, password, company_id, contract_id, admin } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'E-mail é obrigatório' });

    } else if (!password) {
        return res.status(400).json({ error: 'Password é obrigatório' });

    } else if (!company_id) {
        return res.status(400).json({ error: 'Company é obrigatório' });

    }else if (!contract_id) {
        return res.status(400).json({ error: 'Contract é obrigatório' });

    }else if (!admin) {
        return res.status(400).json({ error: 'Contract é obrigatório' });

    }else {

        let exists;

        exists = await UserModel.
            findOne(
                {
                    'email': { '$eq': email }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma conta cadastrada com este e-mail!' });
        }
        next();
    }
}

module.exports = UserValidation;