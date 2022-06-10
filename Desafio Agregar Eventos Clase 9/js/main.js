let cards;
let newElement;
let usuario;
let password;
let login;

//Declaracion de objetos
class Usuario{
    constructor(user, password){
        this.user = user;
        this.password = password;
    }

    

    saludo(){
        alert("Bienvenido a Clouds Accesorios: " + this.user);
    }

}

class Producto{
    constructor(nombre, precio, imagen, id){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.id = id;
    }

    agregarCards = () => {
        
        return `<img src="${this.imagen}" alt="${this.imagen}" width="320px" height="400" class="rounded-2xl mx-auto "> 
                <figcaption class="text-center bg-fuchsia-300 rounded-2xl w-80 mx-auto">${this.nombre}</figcaption> 
                <p class="text-center bg-indigo-400 rounded-2xl w-80 mx-auto">${this.precio}</p>
                <div class="flex justify-center m-3"><button id="btn" class="rounded-md p-1 text-white bg-sky-500" type="button" data-id=${this.id}>Comprar</button></div>`
                
    }
}

//Declaracion de arrays
const Usuarios = [];
const Productos = [new Producto("King & Queen", "$1000","img/productos/anillos.jpg","1"),
                   new Producto("Gold Chain", "$1500", "img/productos/arito.jpg","2"),
                   new Producto("Gold Heart", "$1250","img/productos/cadena.jpg","3"),
                   new Producto("Tri Color", "$3000","img/productos/cartera_1.jpg","4"),
                   new Producto("Nombres", "$500","img/productos/pulseras.jpg","5"),
                   new Producto("Angel & Demon", "$1000","img/productos/anillos_2.jpg","6")
                ];


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

//inicio de programa

//Tomo los elementos por ID
cards = document.getElementById("productos");
login = document.getElementById("login");


for(const producto of Productos){
    newElement = document.createElement("figure");
    newElement.innerHTML = producto.agregarCards();
    boton = document.getElementById("btn");
    cards.append(newElement);
}
//evento de Login
login.addEventListener('click', () => {
     programa();
})
//evento de boton comprar
boton.addEventListener('click', (e)=> {
    const button = e.target;
    console.log(button);

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: "Agregaste el producto al carrito",
        showConfirmButton: false,
        timer: 1500
    })

})



const programa = () =>{
    let salir = false;
    let opcion;
    do{
        //Menu
        opcion = prompt("Bienvenido a Clouds Accesorios! por favor ingrese una opcion para continuar: \n 'Ingresar' para inciar sesion \n 'Registrarse' para crear una cuenta \n 'Mostrar' para mostrar la lista de usuarios \n 'Ordenar' para ordenar en orden alfabetico y mostrar la lista de usuarios \n 'Salir' para retirarse").toLowerCase();

        switch(opcion){
            case 'ingresar':
                usuario = prompt("ingrese su usuario: ").toLowerCase();
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
                    //Le agregue un salir = true por que me di cuenta que el programa no terminaba una vez que iniciaba sesion
                    salir = true;
                } else {
                    alert("El usuario ingresado no existe!");
                }
    
                break;
    
            case 'registrarse':
                usuario = prompt("ingrese su usuario: ").toLowerCase();
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
                            usuario = prompt("ingrese su usuario: ").toLowerCase();
                            validarString();
                        }while(validarUser(usuario));
    
                        Usuarios.push(new Usuario(usuario,password));
                        alert("El usuario se registro correctamente!");
                        
                    }
                   
                }
    
                break;
            
            case 'mostrar':
                //no supe como hacer para que muestre en un alert el array asi que lo muestro en consola 
                alert("mirar la consola!")
                console.table(Usuarios);
                
                break;
            case 'ordenar':
                //ordeno y muestro la lista ordenada
                Usuarios.sort( compare );
                alert("Se ordeno la lista de usuarios mirar la consola!");
                console.table(Usuarios);
                break; 
    
            case 'salir':
                salir = true;
                alert("Gracias por probar el programa")
    
                break;
            default:
                alert("ingrese una opcion valida!");
        }
    }while(salir == false);
}