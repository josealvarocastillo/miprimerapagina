// alert("Hola este es mi Javascript");
// let nombre = "alvaro";
// var nombre1 = "Alvaro";
// const nombre2 = "ALVARO";
// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

//SELEECIONAR ELEMENTOS

let contenidoTitulo = "ASESORIA Y SERVICIOS";

let titulo = document.querySelector(".titulo"); // toma el elemento de la clase ".tutulo" en HTML y se la asigan a la variable titulo
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText; // toma el texto que se encuentra en en la clase "titulo" en HTML y se la asiga a la variable textoTitulo
console.log(textoTitulo);

if (textoTitulo == "ASESORIA Y SERVICIOs") {
  titulo.innerHTML = "Otro";
} else {
  console.log("no se cumple");
}

// FUNCIONES
let org = "empresas";
let oper = "actividades";
let alter = "opción";

let parrafo = document.querySelector(".principal");

function cambiarTextoPrin(A, B, C) {
  let contenido = `Conocedor de las problemáticas y debilidades a las que se enfrentan día a día las ${A} modernas, en áreas vitales como logística y algunos procesos de la administración de la cadena de abastecimiento (SCM); que, aunque no son el “core” del negocio, impactan negativamente el servicio al cliente. Ya sea porque las ${B} y procesos no cuentan con el personal profesional y calificado o se han realizado empíricamente por años. Presentamos una ${C} para mejorar y fortalecer los resultados, desempeño e indicadores que sus operaciones necesitan.`;
// los nombres de las variables que se dan en las funciones son temporales y no tienen nada que ver con los nombres asignados con "let" asigna en este caso "A" a "org" "B" a "oper" y "C" a "alter"
  return contenido;
}

// parrafo.innerText = cambiarTextoPrin(org, oper, alter); 
// aqui se puede cambiar las variables directamente por el texto entre comillas
parrafo.innerText = cambiarTextoPrin("EMPRESAS", "ACTIVIDADES", "OPCION");


// JS FORMULARIOS
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo1 = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo1.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo1.innerHTML = warnings;
  } else {
    parrafo1.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});