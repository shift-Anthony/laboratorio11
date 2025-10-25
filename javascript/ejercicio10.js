//Se inicializa la variable opcion
let opcion;
//Se hara uso do-while para el programa
do {
    let menuTexto = `
Elige una opción:
1. Calcular área del círculo
2. Calcular área del rectángulo
3. Salir`;
    opcion = prompt(menuTexto);
    // Si presiona cancelar tambien sale del programa
    if (opcion === null) {
        opcion = "3";
    }
    //Se procede a verificar las opciones
    if (opcion === "1") {
        // Area del Circulo
        let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
        if (!isNaN(radio) && radio > 0) {
            let area = Math.PI * (radio ** 2);
            alert(`El área del círculo es: ${area.toFixed(2)}`);
        } else {
            alert("Debes ingresar un número positivo válido.");
        }
    } else if (opcion === "2") {
        // Area del rectangulo
        let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
        let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));
        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
            let area = base * altura;
            alert(`El área del rectángulo es: ${area.toFixed(2)}`);
        } else {
            alert("Debes ingresar números positivos válidos.");
        }
    } else if (opcion === "3") {
        alert("Saliendo del programa. ¡Adiós!");

    } else {
        //Si la opcion no es 1 o 2 o 3 muestra este mensaje
        alert("Opción no válida. Por favor, elige 1, 2 o 3.");
    }
} while (opcion !== "3");