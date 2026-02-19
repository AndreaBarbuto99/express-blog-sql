function endpointNotFound(req, res, next) {

    res.status(404);

    res.json({
        error: "Not found",
        message: "La pagina che stai cercando non esiste"
    });
}

module.exports = endpointNotFound;