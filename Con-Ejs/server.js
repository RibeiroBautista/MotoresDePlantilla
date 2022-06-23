const express = require('express');
const routes = require("./src/routes/index");
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use("/", routes);

app.use((error, req, res, next) => {
    console.log(`error en el server ${error}`);
    res.sendStatus(500);
});

app.listen(8080, () => {
    console.log("Servidor corriendo en puerto: 8080");
});