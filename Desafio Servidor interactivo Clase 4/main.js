
let nombre;
let apellido;

nombre = prompt("ingrese su nombre:");
apellido = prompt("ingrese su apellido:");

if (!nombre.match("[A-Za-z]") && !apellido.match("[A-Za-z]")) {
    do {
        alert("no ingreso un nombre o apellido valido!");
        nombre = prompt("ingrese nuevamente su nombre:");
        apellido = prompt("ingrese nuevamente su apellido:");
    } while (!nombre.match("[A-Za-z]") && !apellido.match("[A-Za-z]"));
}

function saludo(nombre, apellido){
    alert("Bienvenido a Clouds Accesorios: " + nombre + " " + apellido)
}

if (nombre.match("[A-Za-z]") && apellido.match("[A-Za-z]")) {
    saludo(nombre, apellido);
}
    

