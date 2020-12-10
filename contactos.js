const getHtml = (contactos) => {

    let html ="";

    if(contactos.length > 0){

    html = `<table class="table table-bordered table-hover dt-responsive tablas">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Email</th>
        <th scope="col">Telefono</th>
        <th scope="col">Pais</th>
        <th scope="col">Compania</th>
        <th scope="col">Cargo</th>
        <th scope="col">Canal</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
  `;

    contactos.forEach(contacto => {

        const arrayCanalPreferido = contacto.canal_preferido.split(',');

        html += `<tr>
         <th scope="row">${contacto.id}</th>
         <td>${contacto.nombre}</td>
         <td>${contacto.apellido}</td>
         <td>${contacto.email}</td>
         <td>${contacto.telefono}</td>
         <td>${contacto.pais}</td>
         <td>${contacto.compania}</td>
         <td>${contacto.cargo}</td>
         <td>`;

         arrayCanalPreferido.forEach(element => {
             
            if (element=="Telefono"){html+=` <span class="badge badge-primary">${element}</span> `;}
            else if (element=="Email"){html+=` <span class="badge badge-secondary">${element}</span> `;}
            else if (element=="Whatsapp"){html+=` <span class="badge badge-success">${element}</span> `;}
            else {html+=` <span class="badge badge-info">${element}</span> `;} 
        
        });   
         
         html += `
         </td>
         <td>
         <button type="button" class="btn btn-outline-warning btn-sm btnEditarContacto" idContacto="${contacto.id}" onClick="editarContacto(event)">Editar</button>
         <button type="button" class="btn btn-outline-danger btn-sm btnEliminarcontacto" nombreContacto="${contacto.nombre + " " + contacto.apellido}" idContacto="${contacto.id}" onClick="eliminarContacto(event)" >Eliminar</button>
         </td>
       </tr>`     

    });

    html += `  
   
     </tbody>
   </table>`;

} else { 
    
    const div = document.createElement("div");
    div.innerHTML = "No se Encontro Resultado";    
    html.appendChild(div);

}

    return html;

}


btnContactos.addEventListener('click', async (e) => {
    e.preventDefault();
    const divBusqueda = document.createElement("div");
    divBusqueda.classList.add("divBusqueda");
    divBusqueda.innerHTML = `
    <div class="d-flex justify-content-center"><button type="button" class="btn btn-success" data-toggle="modal" data-target="#nuevoContacto">Crear Contacto</button></div>
      <form>
      <div class="input-group busquedaContacto d-flex justify-content-around">
      <input type="text" class="form-control col-4" id="nombreBusqueda" placeholder="Nombre" >
      <input type="text" class="form-control col-4" id="apellidoBusqueda" placeholder="Apellido">
      <input type="text" class="form-control col-4" id="emailBusqueda" placeholder="Email">
      <input type="text" class="form-control col-4" id="paisBusqueda" placeholder="Pais">
      <input type="text" class="form-control col-4" id="companiaBusqueda" placeholder="Compania">
      <button type="submit" class="btn btn-primary" id="buscarContacto" onClick="buscarContactos(event)" >Buscar</button>
      <button type="reset" class="btn btn-danger" id="borrar" >Borrar</button>
      </div>
    </form>

  `;
  
    contenidoMostrar.innerHTML = '<div class="alert alert-info" role="alert">Listado de Contactos</div>';
    contenidoMostrar.appendChild(divBusqueda);

    const divTabla = document.createElement("div");
    divTabla.classList.add("divTabla")
    contenidoMostrar.appendChild(divTabla);

});

async function buscarContactos (e){
    const divTabla = document.querySelector(".divTabla");

    e.preventDefault();

    try {

        divTabla.innerHTML = "";
        const nombre = document.querySelector('#nombreBusqueda').value;
        const apellido = document.querySelector('#apellidoBusqueda').value;
        const email = document.querySelector('#emailBusqueda').value;
        const pais = document.querySelector('#paisBusqueda').value;
        const compania = document.querySelector('#companiaBusqueda').value;

        const ext = '/v1/contactosFiltro/';
        const cuerpo = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "pais": pais,
            "compania": compania
        };

        const metodo = 'POST';

        let contactos = await fetcheo(url, ext, cuerpo, metodo);

        if (contactos) {

            const tabla = getHtml(contactos);
            divTabla.innerHTML = tabla;


        } else if (contactos.error) { alert(contactos.error); }
        else { alert("No hay contactos para mostar") }

    } catch (err) {
        alert(err)
    }


};

btnCrearContacto.addEventListener('click', async (e) => {

    e.preventDefault();

    const nombre = document.querySelector('.nuevoNombreContacto').value;
    const apellido = document.querySelector('.nuevoApellidoContacto').value;
    const email = document.querySelector('.nuevoEmailContacto').value;
    const telefono = document.querySelector('.nuevoTelefonoContacto').value;
    const pais = document.querySelector('.nuevoPaisContacto').value;
    const compania = document.querySelector('.nuevaCompaniaContacto').value;
    const cargo = document.querySelector('.nuevoCargoContacto').value;
    const canal = document.querySelectorAll('#nuevoCanalContacto option:checked');
    const mapCanal  = Array.from(canal).map(el => el.value);
    const valCanal = mapCanal.toString();  

    try {

        const ext = '/v1/contactos/';
        const cuerpo = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono,
            "pais": pais,
            "compania":compania,
            "cargo" : cargo,
            "canal_preferido" : valCanal
        };

        const metodo = 'POST';

        let crearContacto = await fetcheo(url, ext, cuerpo, metodo);

        if (crearContacto.mensaje) {

            $('#nuevoContacto').modal('hide');
            
            $('#nuevoContacto').on('hidden.bs.modal', function (e) {
                $(this)
                  .find("input,select")
                     .val('')
                     .end();
              })

              Swal.fire("Creado!", "Contacto Creado Correctamente.", "success");

        } else if (crearContacto.error) { alert(crearContacto.error); }

    } catch (err) {
        alert(err)
    }


});

async function editarContacto (e){

    e.preventDefault();

    const idContacto = await e.target.attributes.idContacto.value;

    //  Swal.fire("Editado!", "Va a Editar el contacto", "info");

    $('#editarContacto').modal('show');


    try {

        const ext = '/v1/contactosFiltro/';
        const cuerpo = {
            "id": idContacto
        };

        const metodo = 'POST';

        const traerContacto = await fetcheo(url, ext, cuerpo, metodo);

        if (traerContacto) {

            const canalesPreferidos = traerContacto[0].canal_preferido.split(",")

            console.log(canalesPreferidos)
            document.querySelector('.editarIdContacto').value = traerContacto[0].id;
            document.querySelector('.editarNombreContacto').value = traerContacto[0].nombre;
            document.querySelector('.editarApellidoContacto').value = traerContacto[0].apellido;
            document.querySelector('.editarEmailContacto').value = traerContacto[0].email;
            document.querySelector('.editarTelefonoContacto').value = traerContacto[0].telefono;
            document.querySelector('.editarPaisContacto').value = traerContacto[0].pais;
            document.querySelector('.editarCompaniaContacto').value= traerContacto[0].compania;
            document.querySelector('.editarCargoContacto').value = traerContacto[0].cargo;
            document.querySelectorAll('.editarCanalContacto option').forEach( o => {

                if(canalesPreferidos.indexOf(o.value) != -1){

                    o.selected = "selected";

                }else {
                    
                    o.removeAttribute("selected")
                }

            })


        } else if (traerContacto.error) { alert(traerContacto.error); }

    }catch (err) {
        alert(err)
    }
    
};

async function eliminarContacto (e){
    const divTabla = document.querySelector(".divTabla");
    e.preventDefault();
    
    const idContacto = await e.target.attributes.idContacto.value;
    const nombreContacto = await e.target.attributes.nombreContacto.value;

    Swal.fire({
        title: '¿Está segur@ de borrar el usuario?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Borrar`,
        denyButtonText: `NOOO !`,
      }).then(async (result)  => {
        if (result.isConfirmed) {
                    try {

            const ext = '/v1/contactos/';
            const cuerpo = {
                "id": idContacto
            };
    
            const metodo = 'DELETE';
    
            const eliminarContacto = await fetcheo(url, ext, cuerpo, metodo);

            if (eliminarContacto.mensaje) {

                Swal.fire("Eliminado!", "Contacto Eliminado Correctamente.", "success");
                divTabla.innerHTML ="";
    
    
            } else if (crearContacto.error) { alert(crearContacto.error); }

        }catch (err) {
            alert(err)
        }
          
        } else if (result.isDenied) {
          Swal.fire("Cancelado!", "Operacion Cancelada", "info");
        }
      })

};