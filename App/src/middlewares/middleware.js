module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flashMsg('errors');
    next();
};

module.exports.csrfErrorMessage = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        console.log('Middleware 2');
        return res.send('CSRF ERROR');
    }
    next();
};