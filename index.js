const express = require('express');
const router = require('./routes');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hola server express');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Hola, soy un nuevo endpoint');
});

router(app);

// app.get('/users', (req, res) => {
// 	const { limit, offset } = req.query;
// 	if (limit && offset) {
// 		res.json({
// 			limit,
// 			offset,
// 		});
// 	} else {
// 		res.send('Parametros invalidos');
// 	}
// });

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
// 	const { categoryId, productId } = req.params;
// 	res.json([
// 		{
// 			categoryId,
// 			category: 'Food',
// 			products: [],
// 		},
// 	]);
// });

app.listen(port, () => {
	console.log(`Mi port ${port}`);
});
