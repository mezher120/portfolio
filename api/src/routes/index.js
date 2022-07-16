const { Router } = require('express');
//para importar todas las rutas metodo Router
const mail = require('./mail.js');


const router = Router();
// asignamos a variable el router

router.use('/mail', mail);
//usamos router para, asignamos url  por cada archivo con funciones

module.exports = router;
//exportamos router con las distintas rutas
