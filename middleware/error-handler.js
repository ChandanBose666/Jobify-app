const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({msg: `there seems to be an error: &{err}`})
}

export default errorHandlerMiddleware;