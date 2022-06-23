const express = require('express');
const { engine } = require('express-handlebars');
const routes = require("./src/routes/index");
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './src/views/layout/main.hbs'),
    layoutsDir: path.join(__dirname, './src/views/layout'),
    partialsDir: path.join(__dirname, './src/views/partials')
}))
app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'hbs')

app.use("/", routes);

app.use((error, req, res, next) => {
    console.log(`error en el server ${error}`);
    res.sendStatus(500);
});

app.listen(8080, () => {
    console.log("Servidor corriendo en puerto: 8080");
});