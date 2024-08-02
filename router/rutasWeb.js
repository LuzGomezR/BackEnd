const express = require('express');
const router = express.Router();

//Enrutamiento
router.get('/', (req, res) => { //Cuando se pone barra sola, es la raiz
    //res.send('Hello World desde Express!')
    res.render("index", {titulo: "Canchas Sinteticas"}) //la parte de titulo es opcional
});

router.use((req, res, next) => {
    res.render("404", { 
        titulo: "Error 404",
        descripcion: "Pagina no encontrada"
    });
});

module.exports = router;