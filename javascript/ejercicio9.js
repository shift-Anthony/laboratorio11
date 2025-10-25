//Se inicializan estas variables
let count, sumados;
//bucle para pedir el numero para el rango
for (let i = 1; i < 2; i++) {
    sumados = ""
    numero = parseInt(prompt(`Ingrese el numero para hacer la lista y omitir los multiplos de 5`));
    //primero se valida si es numero, no puede ser negativo
    if (isNaN(numero) || numero < 0) {
        alert(`No es valido, ingrese de nuevo`);
        i--; //Regresa el contador hasta que sea valido
    }
    else {
        //En el "for" se recorre desde 1 hasta el numero
        count = 0;
        for (let i = 1; i <= numero; i++) {
            //Si el numero es menor que 5 o si el residuo no es igual a 0 entra a la condicion
            if (i % 5 === i || i % 5 !== 0) {
                count = count + i;
                //Se hace otra variable con los numeros que se estan sumando
                sumados = sumados + `${i}-`;
            }
        }       //Se muestra la lista
        alert(`El resultado de los numeros sumados son : ${count}\n Numeros Sumados: ` + sumados)
        i-- //Regresa para una nueva peticion
    }
}