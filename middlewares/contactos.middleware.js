const usuariosServicios = require('../servicios/usuarios.servicios.js');
const { jwt, firma } = require("../configuracion/configuracion.js");


function validarDatos(req, res, next) {

    console.log("Validando Datos Completos de la Contacto");       

    const { nombre, apellido, email} = req.body;

    if ( !nombre || !apellido || !email ) {

        res.status(400).json({
            error: `Datos Incompletos ! al menos debe enviar Nombre, Apellido , Email`
        });

    } else {

        next();

    }

}


async function validarExistencia(req, res, next) {

    const contactosServicios = require('../servicios/contactos.servicios.js');

    console.log("Validando Contacto");

    const consultaContacto = await contactosServicios.buscarContacto(req.body);

    console.log("Contacto encontrado : ", consultaContacto);

    if (consultaContacto.length > 0) { res.status(409).json({
        error: `El contacto con Email ${req.body.email} ya existe en la base de datos`
    }); }

    else { next(); }

}

module.exports = { validarDatos, validarExistencia};