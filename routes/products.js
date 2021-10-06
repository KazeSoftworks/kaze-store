const express = require('express');
const ProductsService = require('../services/product');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
	const products = await service.find();
	res.json(products);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const product = service.findOne(id);
	res.json(product);
});

router.post('/', (req, res) => {
	const body = req.body;
	const newProduct = service.create(body);
	res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		const product = service.update(id, body);
		res.json(product);
	} catch (error) {
		res.status(404).json({ err: 'No se encontró el producto' });
		console.warn(error);
	}
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const rta = service.delete(id);
	res.json(rta);
});

module.exports = router;
