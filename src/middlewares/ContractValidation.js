const ContractModel = require('../model/ContractModel');

const ContractValidation = async (req, res, next) => {

    const { duration, start_date, end_date, active, company } = req.body;

    if (!duration) {
        return res.status(400).json({ error: 'Duration é obrigatório' });

    } else if (!start_date) {
        return res.status(400).json({ error: 'Start date é obrigatório' });

    } else if (!end_date) {
        return res.status(400).json({ error: 'End date é obrigatório' });

    }else if (!active) {
        return res.status(400).json({ error: 'Active é obrigatório' });

    }else if (!company) {
        return res.status(400).json({ error: 'Company é obrigatório' });

    }else {
        next();

    }
}

module.exports = ContractValidation;