const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//CONFIGURACIONES DEL SERVIDOR
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//CONFIGURACION DE LOS MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());

//CONFIGURACIONES DE RUTAS
app.get('/', (req, res)=>{
    res.json({
        "Title": "Hola Mundo...!!"
    });
});

//CONFIGURACIÓN DEL LISTEN
app.listen(app.get('port'), ()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});



