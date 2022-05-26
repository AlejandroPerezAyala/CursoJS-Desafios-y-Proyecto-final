//Declaracion de variables 
let nombre;
let apellido;

//Declaracion de funciones
//Funcion para validar que solo se ingresen letras
function validarString (){
    if ((!nombre.match("[A-Za-z]{3}")) && (!apellido.match("[A-Za-z]{3}"))) {
        do {
            alert("no ingreso un nombre y apellido valido!");
            nombre = prompt("ingrese nuevamente su nombre:");
            apellido = prompt("ingrese nuevamente su apellido:");

            if(!nombre.match("[A-Za-z]{3}")){
                do{
                    alert("No ingresaste un nombre valido");
                    nombre = prompt("ingrese nuevamente su nombre: ");
                }while(!nombre.match("[A-Za-z]{3}"))
            } else if(!apellido.match("[A-Za-z]{3}")){
                do{
                    alert("No ingresaste un apellido valido");
                    apellido = prompt("ingrese nuevamente su apellido: ");
                }while(!apellido.match("[A-Za-z]{3}"));
            }
        } while ((!nombre.match("[A-Za-z]{3}")) && (!apellido.match("[A-Za-z]{3}")));
        return true;
    } else if(!nombre.match("[A-Za-z]{3}")){
        do{
            alert("No ingresaste un nombre valido");
            nombre = prompt("ingrese nuevamente su nombre: ");
        }while(!nombre.match("[A-Za-z]{3}"))
        return true;
    } else if(!apellido.match("[A-Za-z]{3}")){
        do{
            alert("No ingresaste un apellido valido");
            apellido = prompt("ingrese nuevamente su apellido: ");
        }while(!apellido.match("[A-Za-z]{3}"));
        return true;
    } else {
        return true;
    }
}
//funcion para saludar
function saludo(){
    alert("Bienvenido a Clouds Accesorios: " + nombre + " " + apellido)
}

//Asignacion de variables
nombre = prompt("ingrese su nombre:");
apellido = prompt("ingrese su apellido:");

if (validarString()) {
    saludo();
}
