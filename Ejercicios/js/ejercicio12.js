/*12. Calculadora simple:
Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
multiplicación, división) con dos números. */

const numero1 = parseInt(prompt('Digite el primer numero:'));
const numero2 = parseInt(prompt('Digite el segundo numero:'));

const operaciones = parseInt(prompt('Seleccione la operación que desea realizar: (1- Suma, 2- Resta, 3- Multiplicación, 4- División)'));

if(operaciones ===1){
    const suma = numero1 + numero2;
    alert(`${numero1} + ${numero2} =  ${suma}`);
    console.log(`La Suma de ${numero1} + ${numero2} =  ${suma}`) ;

}else if(operaciones ===2){
    const resta = numero1 - numero2;
    alert(`${numero1} - ${numero2} =  ${resta}`);
    console.log(`La resta de ${numero1} - ${numero2} =  ${resta}`);

} else if(operaciones ===3){
    const multiplicacion = numero1 *  numero2;
    alert(`${numero1} * ${numero2} =  ${multiplicacion}`);
    console.log(`La Multiplicacion de ${numero1} + ${numero2} =  ${multiplicacion}`);

}else if(operaciones ===4){
    const division = numero1 / numero2;
    alert(`${numero1} / ${numero2} =  ${division}`);
    console.log(`La Division de ${numero1} / ${numero2} =  ${division}`);

}else{
    alert(`El numero que ingreso es invalido`);
    console.log('La opcion seleccionada no es valida');
    

}














