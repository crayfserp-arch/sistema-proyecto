alert(si funciona);
function multiplicar (a,b) {
    let resultado=0;
    let contador=0;
    while(contador<b){
        resultado+=a;
        contador++;
    }
       return resultado;    
}
let a=Number(prompt("Intr.un numero:"));
let b=Number(prompt("Intr. un numero"));
console.log("Resultado:" +multiplicar(a,b));
