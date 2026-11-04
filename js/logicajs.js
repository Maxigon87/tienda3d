function reseteando() {
    document.getElementById("campos").reset();
    var resumen = document.getElementById("resumenDelFormulario");
    if (resumen) resumen.innerHTML = "";
}

function validarFormulario(event) {
    event.preventDefault(); // no arranca por defecto el envio del formulario


    var elInputNombre = document.getElementById("nombre");
    var elInputApellido = document.getElementById("apellido"); // guardo los datos en las variables
    var elInputTelefono = document.getElementById("telefono");
    var elInputEmail = document.getElementById("email");
    var elInputAreaTexto = document.getElementById("areaTexto");

    var valorNombre = elInputNombre.value.trim();
    var valorApellido = elInputApellido.value.trim();
    var valorTelefono = elInputTelefono.value.trim();
    var valorEmail = elInputEmail.value.trim();     // limpio los espacios basura
    var valorComentario = elInputAreaTexto.value.trim();

    var expresionesEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var expresionesTelefono = /^\d{7,15}$/;
    var expresionesLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    var formularioOK = true;
    //VAlidacioness
    if (valorNombre == "") {
        elInputNombre.value = "";
        elInputNombre.classList.add("input-error");
        elInputNombre.placeholder = "El nombre es obligatorio";
        formularioOK = false;
    }
    else if (valorNombre.length < 3 || valorNombre.length > 20) {
        elInputNombre.value = "";
        elInputNombre.classList.add("input-error");
        elInputNombre.placeholder = "Debe tener entre 3 y 20 caracteres"
        formularioOK = false;
    }
    else if (expresionesLetras.test(valorNombre) == false) {
        elInputNombre = "";
        elInputNombre.classList.add("input-error");
        elInputNombre.placeholder = "No intente abreviar juan 2do, escribalo, vago";
        formularioOK = false;
    }

    if (valorApellido == "") {
        elInputApellido.value = "";
        elInputApellido.classList.add("input-error");
        elInputApellido.placeholder = "El Apellido es obligatorio";
        formularioOK = false;
    }
    else if (valorApellido.length < 3 || valorApellido.length > 20) {
        elInputApellido.value = "";
        elInputApellido.classList.add("input-error");
        elInputApellido.placeholder = "Debe tener entre 3 y 20 caracteres"
        formularioOK = false;
    }
    else if (expresionesLetras.test(valorApellido) == false) {
        elInputApellido = "";
        elInputApellido.classList.add("input-error");
        elInputApellido.placeholder = "Letras por favor no me haga renegar.";
        formularioOK = false;
    }

    if (valorEmail == "") {
        elInputEmail.value = "";
        elInputEmail.classList.add("input-error");
        elInputEmail.placeholder = "El correo es obligatorio"
        formularioOK = false;
    }
    else if (expresionesEmail.test(valorEmail) == false) {
        elInputEmail.value = "";
        elInputEmail.classList.add("input-error");
        elInputEmail.placeholder = "Escriba bien el email, concentrese por favor, no se distraiga";
        formularioOK = false;
    }

    if (valorTelefono == "") {
        elInputTelefono.value = "";
        elInputTelefono.classList.add("input-error");
        elInputTelefono.placeholder = "Te falta escribir tu telefono crack"
        formularioOK = false;
    }
    else if (expresionesTelefono.test(valorTelefono) == false) {
        elInputTelefono.value = "";
        elInputTelefono.classList.add("input-error");
        elInputTelefono.placeholder = "Escriba bien su telefono por favor, no nos haga renegar, sea buen usuario si?"
        formularioOK = false;
    }

    var resumenDelFormulario = document.getElementById("resumenDelFormulario");
    resumenDelFormulario.innerHTML = "";

    if (formularioOK == true) {                            //crea el resumen

        var divDatos = document.createElement("div");
        divDatos.classList.add("datos-resumen");                        //crea clase para el estilo

        var titulo = document.createElement("h3");
        titulo.textContent = "Resumen de los datos del cliente enviados."

        var parrafoNombre = document.createElement("p");
        parrafoNombre.textContent = "Nombre : " + valorNombre + ", Apellido : " + valorApellido;

        var parrafoCorreo = document.createElement("p");
        parrafoCorreo.textContent = "Correo electronico : " + valorEmail;

        var parrafoTelefono = document.createElement("p");
        parrafoTelefono.textContent = "Telefono : " + valorTelefono;

        var parraComentario = document.createElement("p");
        parraComentario.textContent = "Comentario : " + valorComentario;

        divDatos.appendChild(titulo);
        divDatos.appendChild(parrafoNombre);
        divDatos.appendChild(parrafoCorreo);
        divDatos.appendChild(parrafoTelefono);
        divDatos.appendChild(parraComentario);

        resumenDelFormulario.appendChild(divDatos);

    }

}