//Declaracion de variables
let usuario;
let password;
let salir = false;
let opcion;

//Declaracion de objeto
class Usuario{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }

    saludo(){
        alert("Bienvenido a Clouds Accesorios: " + this.user);
    }

}

//Declaracion de array
const Usuarios = [];

//Declaracion de funciones

//Validacion de String
function validarString(){
    if(!usuario.match("[A-Za-z]{3,10}")){
        do{
            alert("No ingreso un usuario valido!!");
            usuario = prompt("Ingrese nuevamente un usuario de 3 caracteres minimo (solo letras):");
        }while(!usuario.match("[A-Za-z]{3,10}"));
        return true;
    } else {
        return true;
    }
}

//validacion si el usuario existe dentro del array
function validarUser(usuario){
    if (Usuarios.some(username => username.user === usuario)){
        return true;
    } else {
        return false;
    }
}

//validacion de password de mas de 8 caracteres
function validarPassword(){
    if(password.length < 8){
        do{
            alert("No ingreso una contraseña valida!!");
            password = prompt("Ingrese nuevamente la contraseña de 8 caracteres minimo: ");
        }while(password.length < 8);
        return true;
    } else {
        return true;
    }
}

//funcion para comparar y ordenar por orden alfabetico
function compare( a, b ) {
    if ( a.user < b.user){
      return -1;
    }
    if ( a.user > b.user){
      return 1;
    }
    return 0;
}
  
  



//comienzo de programa
do{
    //Menu
    opcion = prompt("Bienvenido a Clouds Accesorios! por favor ingrese una opcion para continuar: \n 'ingresar' para inciar sesion \n 'Registrarse' para crear una cuenta \n 'Mostrar' para mostrar la lista de usuarios \n 'Ordenar' para ordenar en orden alfabetico y mostrar la lista de usuarios \n 'Salir' para retirarse");
    switch(opcion){
        case 'ingresar':
            usuario = prompt("ingrese su usuario: ");
            validarString();
            validarUser(usuario);
            password = prompt("ingrese su contraseña: ");
            validarPassword();

            if(validarUser(usuario) && validarPassword()){
                //Recorro el array para mostrar solo el usuario que se logueo
                for(const _Usuario of Usuarios){
                    if(usuario === _Usuario.user){
                        _Usuario.saludo();
                        break;
                    }
                }
            } else {
                alert("El usuario ingresado no existe!");
            }

            break;

        case 'Registrarse':
            usuario = prompt("ingrese su usuario: ");
            validarString();
            password = prompt("ingrese su contraseña: ");
            validarPassword();

            //Valido que el usuario que quiera registar este disponible
            if(validarString() && validarPassword()){
                if(!validarUser(usuario)) {
                    Usuarios.push(new Usuario(usuario,password));
                    alert("El usuario se registro correctamente!");
                } else {
                    do{
                        alert("El ususario ya existe!");
                        usuario = prompt("ingrese su usuario: ");
                        validarString();
                    }while(validarUser(usuario));

                    Usuarios.push(new Usuario(usuario,password));
                    alert("El usuario se registro correctamente!");
                    
                }
               
            }

            break;
        
        case 'Mostrar':
            //no supe como hacer para que muestre en un alert el array asi que lo muestro en consola 
            alert("mirar la consola!")
            console.table(Usuarios);
            
            break;
        case 'Ordenar':
            //ordeno y muestro la lista ordenada
            Usuarios.sort( compare );
            alert("Se ordeno la lista de usuarios mirar la consola!");
            console.table(Usuarios);
            break; 

        case 'Salir':
            salir = true;
            alert("Gracias por probar el programa")

            break;
        default:
            alert("ingrese una opcion valida!");
    }
}while(salir == false);