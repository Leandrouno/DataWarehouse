const btnLogin = document.querySelector('.btnLogin');
const btnRegistrar = document.querySelector('.btnRegistrar');
const btnSalir = document.querySelector('.btnSalir');
const btnUsuarios = document.querySelector('.btnUsuarios');
const btnContactos = document.querySelector('.btnContactos');
const btnCompanias = document.querySelector('.btnCompanias');
const btnRegion = document.querySelector('.btnRegion');
const contenidoMostrar = document.querySelector(".contenido_mostar");
const btnBuscarContacto = document.querySelector(".btnBuscarContacto");
const btnCrearContacto = document.querySelector(".btnCrearContacto");
const btnEditarContacto = document.querySelector(".btnEditarContacto");


const url = 'http://127.0.0.1:3001';

const fetcheo = async (url, ext, cuerpo, metodo) => {

    if (metodo == "GET") {

        const respuesta = await fetch(url + ext, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(cuerpo)
        });

        data = await respuesta.json();
        return await data;

    } else {

        const respuesta = await fetch(url + ext, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(cuerpo)
        });

        data = await respuesta.json();
        return await data;

    }



}

btnLogin.addEventListener('click', async (e) => {

    e.preventDefault();

    const usuario = document.querySelector('.usuario').value;
    const contrasena = document.querySelector('.password').value;

    try {
        const ext = '/v1/ingreso';
        const cuerpo = {
            "usuario": usuario,
            "contrasena": contrasena
        };
        const metodo = 'POST';

        let ingreso = await fetcheo(url, ext, cuerpo, metodo);

        if (ingreso.token) {

            $("#btnLogin").addClass("btn-warning").removeClass("btn-success");
            $("#btnLogin").prop('disabled', true);
            $("#btnLogin").html(`Bienvenid@ al sitio ${usuario}`);
            $("#navbarResponsive ul li").show();

            localStorage.setItem("Token", JSON.stringify(ingreso.token));
            localStorage.setItem("Usuario", JSON.stringify(usuario));

            setTimeout(function () {
                $('#login').modal('hide');
                $(".btnIngreso").prop('disabled', true);
                $(".btnRegistro").prop('disabled', true);
            }, 1000);

        } else {
            alert(ingreso.error);
        }

    } catch (err) {

    }


});

btnRegistrar.addEventListener('click', async (e) => {

    e.preventDefault();

    const usuario = document.querySelector('.nuevoUsuario').value;
    const nombre = document.querySelector('.nuevoNombre').value;
    const apellido = document.querySelector('.nuevoApellido').value;
    const email = document.querySelector('.nuevoEmail').value;
    const telefono = document.querySelector('.nuevoTelefono').value;
    const domicilio = document.querySelector('.nuevoDomicilio').value;
    const contrasena = document.querySelector('.nuevoPassword').value;

    try {

        const ext = '/v1/usuarios/';
        const cuerpo = {
            "usuario": usuario,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono,
            "domicilio": domicilio,
            "contrasena": contrasena
        };

        const metodo = 'POST';

        let registro = await fetcheo(url, ext, cuerpo, metodo);

        if (registro.mensaje) {

            $(".btnRegistrar").addClass("btn-warning").removeClass("btn-success");
            $(".btnRegistrar").html('Registrad@ !!');
            $(".btnRegistro").prop('disabled', true);
            $(".btnRegistro").html('Registrad@ !!');

            setTimeout(function () {
                $('#registro').modal('hide');
                $(".btnRegistrar").prop('disabled', true);
            }, 2000);

        } else if (registro.error) { alert(registro.error); }

    } catch (err) {
        alert(err)
    }


});


btnSalir.addEventListener('click', async (e) => {
    e.preventDefault();
    localStorage.clear();
    $(".btnIngreso").prop('disabled', false);
    $(".btnRegistro").prop('disabled', false);
    $(".btnTransferir").prop('disabled', true);
    $(".btnTransferencias").prop('disabled', true);
    $("#navbarResponsive ul li").hide();
});



 
btnUsuarios.addEventListener('click', async (e) => {
    e.preventDefault();

    contenidoMostrar.innerHTML = '<div class="alert alert-success" role="alert">Listado de Usuarios</div>';

});

btnCompanias.addEventListener('click', async (e) => {
    e.preventDefault();

    contenidoMostrar.innerHTML = '<div class="alert alert-warning" role="alert">Listado de Companias</div>';

});

btnRegion.addEventListener('click', async (e) => {
    e.preventDefault();

    contenidoMostrar.innerHTML = '<div class="alert alert-secondary" role="alert">Listado de Paises</div>';

});


document.addEventListener("DOMContentLoaded", function (event) {


    if (localStorage.getItem("Token") !== null) {

        $(".btnIngreso").prop('disabled', true);
        $(".btnRegistro").prop('disabled', true);
        $("#navbarResponsive ul li").show();


    } else {

        $("#navbarResponsive ul li").hide();
        $('#login').modal('show');
    }


});

$(document).ready(function() {
    $('select').selectpicker();
});

