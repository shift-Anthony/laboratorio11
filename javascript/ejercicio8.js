//Se inicializan estas variables
let numero, count, primos;
//bucle para pedir el numero para el rango
for (let i = 1; i < 2; i++) {
    primos = "2"; //Siempre empezara con 2
    numero = parseInt(prompt(`Ingrese el numero para hacer la lista de los numeros primos`));
    //primero se valida si es numero, no puede ser negativo,ni tampoco 1
    if (isNaN(numero) || numero < 2) {
        alert(`No es valido, ingrese de nuevo`);
        i--; //Regresa el contador hasta que sea valido
    }
    else {
        //En el "for" se inicializa desde 3 hasta el numero 
        for (let i = 3; i <= numero; i++) {
            count = 0;
            //En este for se recorre desde 1 hasta "i"
            for (let j = 1; j <= i; j++) {
                //Si el resultado es 0 se suma, los primos solo deben sumar 2 
                if (i % j === 0) count++;
            }
            //Aqui se valida que sea primo, los primos solo tienen dos divisores
            if (count === 2) primos = primos + `,${i}`;
        }       //Se muestra la lista
        alert(`Los numeros primos desde 2 a ${numero} son: \n` + primos)
        i-- //Regresa para una nueva peticion
    }
}