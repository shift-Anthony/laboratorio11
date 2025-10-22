let nota;
let num1 =0;
let total=0;
for(let i=1;i<=5;i++){
    nota = parseInt(prompt(`Ingrese la nota ${i}:`));
    if(nota<0 || nota >20){
        alert("La nota ingresada no esta entre 0 y 20");
        i--;
    }
    else{
        total=total+nota;
    }
}

alert(`el promedio total es ${total/5}`);