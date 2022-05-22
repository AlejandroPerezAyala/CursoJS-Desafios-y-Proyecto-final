/**
 * Tomando como base los ejemplos anteriores de la estructura for, while y do...while, crear un algoritmo que repita un bloque de instrucciones.
 */

//Declaracion de variables

let primerNumero;
let segundoNumero;
let resultado;
let operacion;
let salir;


//bucle inicial
do{
    //asignacion de variables y pedido de valores
    primerNumero = parseInt(prompt("ingresa el primer numero: "));
    segundoNumero = parseInt(prompt("ingresa el segundo numero: "));

    if((isNaN(primerNumero)) && (isNaN(segundoNumero))){
        //bucle si no ingresa ningun numero
        do{

            alert("no ingresaste los numeros!");
            primerNumero = parseInt(prompt("ingresa nuevamente el primer numero: "));
            segundoNumero = parseInt(prompt("ingresa nuevamente el segundo numero: "));

        }while((isNaN(primerNumero)) && (isNaN(segundoNumero)));

    } else if (isNaN(primerNumero)){
        //bucle si no ingresa el primer numero
        do{

            alert("no ingresaste el primer numero!");
            primerNumero = parseInt(prompt("ingresa nuevamente el primer numero:"));

        }while(isNaN(primerNumero))

    } else if (isNaN(segundoNumero)){
        //bucle si no ingresa el segundo numero
        do{

            alert("no ingresaste el segundo numero!");
            segundoNumero = parseInt(prompt("ingresa nuevamente el segundo numero:"));

        }while(isNaN(segundoNumero))

    }
    
    //condicional si ingresa ambos numeros
    if((!isNaN(primerNumero)) && (!isNaN(segundoNumero))){

        //pido la operacion a realizar
        operacion = prompt("ingresa el operador que necesitas: (+, -, /, *)");
        //condicional para poder realizar las operaciones
        if(operacion != '+' && operacion != '-' && operacion != '/' && operacion != '*'){
            //bucle si no ingresa un operador
            do{

                alert("no ingresaste ningun operador para continuar!!");
                operacion = prompt("ingresa nuevamente el operador que necesitas: (+, -, /, *)");

            }while(operacion != '+' && operacion != '-' && operacion != '/' && operacion != '*');
        }
        
        //Realiza las operaciones
        if(operacion == '+'){
            resultado = primerNumero + segundoNumero;
            alert("El resultado es: " + resultado);
        } else if(operacion == '-'){
            resultado = primerNumero - segundoNumero;
            alert("El resultado es: " + resultado);
        } else if(operacion == '/'){
            resultado = primerNumero / segundoNumero;
            alert("El resultado es: " + resultado);
        } else if(operacion == '*'){
            resultado = primerNumero * segundoNumero;
            alert("El resultado es: " + resultado);
        }  
    }
    //variable para terminar el programa
    salir = prompt("salir? :")
}while(salir == "no");

