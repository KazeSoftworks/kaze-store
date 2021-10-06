const productRouter = require('./products');

const routerApi = (app) => {
	app.use('/products', productRouter);
};

module.exports = routerApi;
