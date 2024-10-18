/*17. Unidades de medida:
Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
siguientes equivalencias.
1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas. */

const pies = parseInt(prompt('Ingrese la cantidad de medida en pies:'));
const metros = parseInt(prompt('Ingrese la cantidad de medida en metros'));

const pies2 = pies / 3.28;
const metrosTotal = metros + pies2;
const pulgada = metrosTotal * 39.37;
const yardas = metrosTotal * 1.0936;
const millas = metrosTotal / 1609.34;

alert(`La suma total en pulgadas de ambas medidas es de ${pulgada.toFixed(3)}pulg`)
alert(`La suma total en yardas de ambas medidas es de ${yardas.toFixed(3)}yd`)
alert(`La suma total en metros de ambas medidas es de ${metrosTotal.toFixed(2)}m`)
alert(`La suma total en millas de ambas medidas es de ${millas.toFixed(2)}mi`)

console.log(`La suma total de ambas medidas(${pies}ft, ${metros}m):\nEn pulgadas ${pulgada.toFixed(3)}pulg\nEn yardas ${yardas.toFixed(3)}yd\nEn metros ${metrosTotal.toFixed(2)}m\nEn millas ${millas.toFixed(2)}mi`);
