const notFoundMiddleware = (req, res) => res.status(404).send('This route is invalid');

export default notFoundMiddleware;