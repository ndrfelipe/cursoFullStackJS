exports.middlewareGlobal = (req, res, next) =>{
    res.locals.variavelLocal = 'Variável local.';
    next()
};