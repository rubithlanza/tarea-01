/*13. Cambio de moneda:
Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
cambio actual. */

const dolar = parseInt(prompt('Ingrese la cantidad de dolares a convertir:'));

const lempiras = dolar * 25.09;

alert(`La cantidad de ${dolar}$ es igual a  ${lempiras} Lmp`);
console.log('La cantidad de', dolar, '$',' es igual a', lempiras,'Lmp');
