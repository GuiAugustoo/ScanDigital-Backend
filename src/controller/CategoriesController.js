const CategoriesModel = require('../model/CategoriesModel');

class CategoriesController {

    async create(req, res) {
        const category = new CategoriesModel(req.body);
        await category
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res) {
        await CategoriesModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async all(req, res) {
        /*filtrar por URL, usar o código { url: { '$in': req.params.url } } */
        await CategoriesModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async delete(req, res) {
        await CategoriesModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new CategoriesController();