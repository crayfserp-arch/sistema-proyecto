a=5
b=6
if(b%2==0)
{
    console.log(b,"es numero par");
}
if(b%2==0)
    {
console.log(a,"es numero par");
}
else{
    console.log(a,"es numero impar");
}
/** Realizar un programa para sumar lo primero 10 numero
 * Ejemplo 1+2+3+4+5+6+7+8+9=45
 */
let suma =0;
for(i=0; i<10; i++)
{
suma+=i; //suma=suma+i
}
console.log("La suma es:",suma);
/**Realizar un programa para generar los numeros pares
 * de n numeros, n es introducido por teclado
 * ejemplo
 */
console.log("Fin del programa");
let cantidad=parseInt(prompt("cuantos numeros pares quiere ver"));
for(let i=1; i<=cantidad;i++){
    console.log(i*2);
}