/*8. Cálculo del promedio:
Solicite tres números y calcule su promedio. */

const numero1 = parseInt(prompt('Digite el primer numero'));
const numero2 = parseInt(prompt('Digite el segundo numero'));
const numero3 = parseInt(prompt('Digite el tercer numero'));

const promedio = ((numero1 + numero2 + numero3) / 3);

alert(`El promedio es =  ${promedio}`);
console.log('El promedio de los 3 numeros ingresado', '(', numero1, numero2, numero3, ')', 'es de:', promedio);