/*7. Verificación de par o impar:
Pida un número al usuario y determina si es par o impar. */

const numero = parseInt(prompt('Ingresa un numero:'));

//Validacion de los numeros si es par o no
if(numero % 2 === 0){
    alert(`El numero que usted ingreso es PAR`);
    console.log('El numero', numero,'es PAR', );
    

}else{
    alert(`El numero que usted ingreso es IMPAR`);
    console.log('El numero', numero,'es IMPAR', );
}