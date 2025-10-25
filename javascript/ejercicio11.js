// 1. Se pide el numero
let numeroString = prompt("Ingresa un número para verificar si es Armstrong:");
// Se valida que no este vacio
if (numeroString === null || numeroString.trim() === "")  {
    alert("Error: No ingresaste ningún valor.");
} else {
    //Contamos con length
    let n_digitos = numeroString.length;
    let suma = 0;
    let i = 0; // Usamos un índice para el bucle
    
    do {
        let digitoString = numeroString[i];
        // convertimos el digito a numero
        let digito = parseInt(digitoString);
        //Se suma 
        suma += digito ** n_digitos;
        i++;
    } while (i < n_digitos); // Repetir mientras 'i' sea menor que el total de dígitos
    let numeroOriginal = parseInt(numeroString);
    if (suma === numeroOriginal) {
        alert(` ${numeroOriginal} si es un número de Armstrong.\n\nCálculo: ${suma}\nDígitos (n): ${n_digitos}`);
    } else {
        alert(` ${numeroOriginal} no es un número de Armstrong.\n\nSuma calculada: ${suma}\nValor original: ${numeroOriginal}`);
    }
}