/* Esta aplicación crea una lista de invitados.
   Los invitados pueden ser agregados a través de un formulario
   Se pueden borrar invitados de la lista usando el botón */

//-----------------------------------------------------------
const formulario = document.querySelector("#form");

formulario.onsubmit = function(e) {
  e.preventDefault(); // Agregar preventDefault()
  // Cambiar de var a const 
  const nombreInput = formulario.elements[0];
  const edadInput = formulario.elements[1];
  const nacionalidadSelect = formulario.elements[2];

  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value); // Declarar enteros
  const nacionalidad = nacionalidadSelect.value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  const lista = document.getElementById("lista-de-invitados");

  const elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista"); // correcion de .add
  lista.appendChild(elementoLista);
// Crear funcion y quitar elemento doble (formulario)
  function crearElemento(descripcion, valor) {
    const spanDescripcion = document.createElement("span");
    const inputValor = document.createElement("input");
    const espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);
// Quitar elemento doble (boton)
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  const corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove(); // especificar que elemento borrar
  };
}
