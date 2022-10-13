import { StatusCodes } from "http-status-codes";

const notFoundMiddleware = (req, res) => res.status(StatusCodes.NOT_FOUND).send('This route is invalid');

export default notFoundMiddleware;