let edad;

for(let i =0;i<1;i++){
    edad = parseInt(prompt(`Ingrese la edad: `));
    alert(edad)
    if (edad<1 || typeof edad === 'NaN' ){
        alert(`No es valida la edad`);
        i--;
    }
}
