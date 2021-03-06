const express = require('express');
const ProductsService = require('../services/product');
const {
	createProductSchema,
	updateProductSchema,
	getProductSchema,
} = require('../schemas/product');
const validatorHandler = require('../middlewares/validator');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
	const products = await service.find();
	res.json(products);
});

router.get(
	'/:id',
	validatorHandler(getProductSchema, 'params'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const product = await service.findOne(id);
			res.json(product);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	'/',
	validatorHandler(createProductSchema, 'body'),
	(req, res) => {
		const body = req.body;
		const newProduct = service.create(body);
		res.status(201).json(newProduct);
	}
);

router.patch(
	'/:id',
	validatorHandler(updateProductSchema, 'body'),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const body = req.body;
			const product = await service.update(id, body);
			res.json(product);
		} catch (error) {
			next(error);
		}
	}
);

router.delete('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const rta = await service.delete(id);
		res.json(rta);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
