let edad;
//bucle infinito para ver la edad
for (let i = 0; i < 1; i++) {
    edad = parseInt(prompt(`Ingrese la edad: `));
    //primero se valida si es numero valido o un string
    if (edad < 1 || isNaN(edad)) {
        alert(`No es valida la edad`);
    }
    //luego se hacen las validaciones para las edades
    else if (edad >= 60) alert("Es adulto mayor");
    else if (edad >= 18 && edad <= 59) alert("Es adulto");
    else if (edad >= 12 && edad <= 17) alert("Es Adolescente");
    else alert("Es niño");
    i--;
}
