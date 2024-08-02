const express = require('express');
const app = express();
const puerto = 3000;

// Uso de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//Rutas
app.use('/', require('./router/rutasWeb'));


app.listen(puerto,() => {
    console.log(`Escuchando en el puerto ${puerto}`);
})