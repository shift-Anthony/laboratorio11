let numero, pares = 0, impares = 0;
//bucle para pedir los 10 numeros
for (let i = 1; i <= 10; i++) {
    numero = parseInt(prompt(`Ingrese el numero ${i}:`));
    //primero se valida si es numero
    if (isNaN(numero)) {
        alert(`No es un numero, ingrese de nuevo`);
        i--; //Regresa el contador hasta que sea valido
    }
    //Si es par lo almacena en pares
    else if (numero % 2 === 0) pares++;
    //De lo contrario en impares
    else impares++;
}

alert(`Numeros pares: ${pares}, Numeros impares ${impares}`)