

//document puente para enlazar js con html 
//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número";

let numeroSecreto = 0; //variable global
let intentos = 0;
let listaNumerosSorteados = []; //Corchetes significa array
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento); //selectores asignar variables    
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroUsuario === numeroSecreto){
        //El usuario acertó
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        //El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return; //Buena práctica aunque no haya elementos que retornar
}

function limpiarCaja(){
    // let valorCaja = document.querySelector("#valorUsuario") // El # se usa para buscar por ID
    // valorCaja = "";

    document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de inicio intervalo de numeros
    //Generar número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar botón
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto; //variable solo de bloque
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los númro posibles");
    } else {
        //Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); //recursividad puede la función llamarse a si misma y ejecutarse dentro de la misma función
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
    //Usar condiciones de salida siempre que se use recursividad para que no se rompa el cófigo

}


