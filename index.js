const express = require('express');
const router = require('./routes');
const cors = require('cors');

const {
	logErrors,
	errorHandler,
	boomErrorHandler,
} = require('./middlewares/error');

const app = express();
const port = 3000;

app.use(express.json());
// const whitelist = [
// 	'http://localhost:3000',
// 	'http://localhost:8080',
// 	'https://kazesoftworks.com',
// ];
// const options = {
// 	origin: (origin, callback) => {
// 		console.log(origin);
// 		if (whitelist.includes(origin)) {
// 			callback(null, true);
// 		} else {
// 			callback(new Error('Invalid Access'));
// 		}
// 	},
// };
//app.use(cors(options));
app.use(cors());
app.get('/', (req, res) => {
	res.send('Hola server express');
});

app.get('/nueva-ruta', (req, res) => {
	res.send('Hola, soy un nuevo endpoint');
});

router(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

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
