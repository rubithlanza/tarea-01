/*20. El combustible:
Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro. */

const kilómetros = parseInt(prompt("Ingrese los Kilometros recorridos:"));
const litros = parseInt(prompt('Ingrese los litros consumidos: '));

const consumo = kilómetros / litros;
 alert(`Por cada litro de combustible se reccore en kilometros: ${consumo.toFixed(2)}km/l`)
 console.log(`Por cada litro de combustible se recorre en kilometros: ${consumo.toFixed(2)}km/l`);
 