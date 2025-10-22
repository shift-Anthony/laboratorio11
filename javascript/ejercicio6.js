//Se inicializa esta variable
let numero
//bucle para pedir el numero para la tabla
for (let i = 1; i < 2; i++) {
    //Se inicializa la variable mensaje para que no empieze con undefined
    mensaje = "";
    numero = parseInt(prompt(`Ingrese el numero para hacer la tabla`));
    //primero se valida si es numero, el numero puede ser negativo tambien
    if (isNaN(numero)) {
        alert(`No es un numero, ingrese de nuevo`);
        i--; //Regresa el contador hasta que sea valido
    }
    else {
        //En el "for" guarda el mensaje y al final hace un salto de linea
        for (let i = 1; i <= 12; i++) {
            mensaje = mensaje + `${numero} * ${i} = ${i * numero}\n`;
        }
        //La tabla es 
        alert(`Tabla del 1 al 12 de ${numero}\n` + mensaje);
        i-- //Regresa para una nueva peticion
    }
}
