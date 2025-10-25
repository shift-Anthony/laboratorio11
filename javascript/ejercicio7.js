//Se inicializa esta variable
let monto;
//bucle para pedir el monto para la transaccion
for (let i = 1; i < 2; i++) {
    monto = parseInt(prompt(`Ingrese el numero para hacer la tabla`));
    //primero se valida si es numero, el numero debe ser mayor o igual a 10 y debe ser divisible entre 10
    if (isNaN(monto) || monto < 10 || monto % 10 !== 0) {
        alert(`Formato Invalido, ingrese de nuevo`);
        i--; //Regresa el contador hasta que sea valido
    }
    else {
        let billete100 = 0, billete50 = 0, billete20 = 0, billete10 = 0, newMonto = monto;
        //En el for se forma un bucle hasta que la variable "newMonto" quede en 0 y no entre a ningun condicional
        for (let i = 1; i < 2; i++) {
            if (newMonto >= 100) {
                billete100 = parseInt(newMonto / 100);
                newMonto = newMonto % 100;
                i--; //regresa al inicio
            }else if (newMonto >= 50) {
                billete50 = parseInt(newMonto / 50);
                newMonto = newMonto % 50;
                i--; //regresa al inicio 
            } else if (newMonto >= 20) {
                billete20 = parseInt(newMonto / 20);
                newMonto = newMonto % 20;
                i--; //regresa al inicio
            } else {
                billete10 = parseInt(newMonto / 10)
                newMonto = newMonto % 10;
                //newMonto quedaria en 0 por lo que ya no hay necesidad de volver al inicio
            }
        } //Muestra los datos
        alert(`Total retirado: ${monto}\n 
            Billetes de 100 usados: ${billete100}\n 
            Billetes de 50 usados: ${billete50}\n 
            Billetes de 20 usados: ${billete20} \n 
            Billetes de 10 usados ${billete10}`);
        i-- //Regresa para una nueva peticion
    }
}
