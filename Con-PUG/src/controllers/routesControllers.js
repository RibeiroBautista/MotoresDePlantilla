const productos = []

const routeHome = (req, res) => {
    try {
        res.render('home.pug')
    } catch (err) {
        console.log(`errorRouteHome : ${err}`)
        res.sendStatus(404)
    }
}

const routeProducts = (req, res, next) => {
    res.render('productos.pug', { productos })
}

const routePostProducts = (req, res, next) => {
    productos.push(req.body)
    res.redirect('/')
    res.status(201).render
}

const routeProductsAll = (req, res, next) => {
    try {
        return res.send(productos);
    } catch (error) {
        res
        .status(error.statusCode ? error.statusCode : 404)
        .json({ error: error.message });
    }
}

module.exports = {
    routeHome, routeProducts, routeProductsAll, routePostProducts, 
}