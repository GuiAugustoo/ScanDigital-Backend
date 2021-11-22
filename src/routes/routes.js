const express = require('express');
const router = express.Router();

const InstanceController = require('../controller/InstanceController');
const InstanceValidation = require('../middlewares/InstanceValidation');

const CategoriesController = require('../controller/CategoriesController');
const CategoriesValidation = require('../middlewares/CategoriesValidation');

const RulesController = require('../controller/RulesController');
const RulesValidation = require('../middlewares/RulesValidation');

const CompanyController = require('../controller/CompanyController');
const CompanyValidation = require('../middlewares/CompanyValidation');

const ContractController = require('../controller/ContractController');
const ContractValidation = require('../middlewares/ContractValidation');

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');

//Instance Routes
router.post('/instance', InstanceValidation, InstanceController.create);
router.put('/instance/:id', InstanceController.update);
router.get('/instance/filter/all', InstanceController.all);
router.delete('/instance/:id', InstanceController.delete);

//Categories Routes
router.post('/category', CategoriesValidation, CategoriesController.create);
router.put('/category/:id', CategoriesController.update);
router.get('/category/filter/all', CategoriesController.all);
router.delete('/category/:id', CategoriesController.delete);

//Rules Routes
router.post('/rules', RulesValidation, RulesController.create);
router.put('/rules/:id', RulesController.update);
router.get('/rules/filter/all', RulesController.all);
router.delete('/rules/:id', RulesController.delete);

//Company Routes
router.post('/company', CompanyValidation, CompanyController.create);
router.put('/company/:id', CompanyController.update);
router.get('/company/filter/all', CompanyController.all);
router.delete('/company/:id', CompanyController.delete);

//Contract Routes
router.post('/contract', ContractValidation, ContractController.create);
router.put('/contract/:id', ContractController.update);
router.get('/contract/filter/all', ContractController.all);
router.delete('/contract/:id', ContractController.delete);

//User Routes
router.post('/user', UserValidation, UserController.create);
router.put('/user/:id', UserController.update);
router.get('/user/filter/all', UserController.all);
router.delete('/user/:id', UserController.delete);

module.exports = router;