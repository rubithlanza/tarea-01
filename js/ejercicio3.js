/*3. Multiplicación y División:
Solicite dos números al usuario y muestra el resultado de la multiplicación y división de
los mismos. */

const numero1 = parseInt(prompt('Digite el primer numero'));
const numero2 = parseInt(prompt('Digite el segundo numero'));

const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;

alert(`${numero1} * ${numero2} =  ${multiplicacion}`);
console.log(`${numero1} + ${numero2} =  ${multiplicacion}`) ;
alert(`${numero1} / ${numero2} =  ${division}`);
console.log(`${numero1} / ${numero2} =  ${division}`) ;