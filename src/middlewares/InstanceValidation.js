const InstanceModel = require('../model/InstanceModel');

const InstanceValidation = async (req, res, next) => {

    const { name, url, password, contract_id } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'name é obrigatório' });

    } else if (!url) {
        return res.status(400).json({ error: 'URL é obrigatório' });

    } else if (!password) {
        return res.status(400).json({ error: 'PassWord é obrigatório' });

    } else if (!contract_id) {
        return res.status(400).json({ error: 'contract_id é obrigatório' });

    } else {

        let exists;

        exists = await InstanceModel.
            findOne(
                {
                    'url': { '$eq': url }
                });

        if (exists) {
            return res.status(400).json({ error: 'Já existe uma instância cadastrada com essa URL!' });
        }
        next();
    }
}

module.exports = InstanceValidation;