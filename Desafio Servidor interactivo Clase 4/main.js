//Declaracion de variables 
let nombre;
let apellido;

//Declaracion de funciones
//Funcion para validar que solo se ingresen letras
function validarString (){
    if (!nombre.match("[A-Za-z]") && !apellido.match("[A-Za-z]")) {
        do {
            alert("no ingreso un nombre o apellido valido!");
            nombre = prompt("ingrese nuevamente su nombre:");
            apellido = prompt("ingrese nuevamente su apellido:");
        } while (!nombre.match("[A-Za-z]") && !apellido.match("[A-Za-z]"));
    }
}
//funcion para saludar
function saludo(){
    alert("Bienvenido a Clouds Accesorios: " + nombre + " " + apellido)
}

//Asignacion de variables
nombre = prompt("ingrese su nombre:");
apellido = prompt("ingrese su apellido:");

if (nombre.match("[A-Za-z]") && apellido.match("[A-Za-z]")) {
    saludo();
} else{
    validarString();
}