/*18. Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas 
cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
25% se dedica al riego. Diseñe un programa que haga lo siguiente:
Determine  la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
pies cúbicos. */

const litros = parseInt(prompt('Ingrese la cantidad del primer tanque en litro:'));
const yardas = parseInt(prompt('Ingrese la cantidad del segundo tanque en yardas³:'));

//Convertir los litros y las yardas dadas 
const metroscubicos1 = litros /1000;
const metroscubicos2 = yardas /1.308;
//declracion de la variable pie cubica
const pie = 35.315;
//Pasamos los metros cubicos a pie cubicos
const pies1 = metroscubicos1 * pie;
const pies2 = metroscubicos2 * pie;
//sacamos el porcentaje del primer tanque 
const riego1 = metroscubicos1 * 0.25;
const riego2 = pies1 * 0.25;
const doméstico1 = metroscubicos1 - riego1;
const doméstico2 = pies1 - riego2;
//Sacamos el porcentaje del segundo tanque 
const riego3 = metroscubicos2 * 0.25;
const riego4 = pies2 * 0.25;
const doméstico3 = metroscubicos2 - riego3;
const doméstico4 = pies2 - riego4;

alert(`La cantidad total del primer tanque en m³ es: ${metroscubicos1.toFixed(2)}m³\n El porcentaje en m³\nConsumo domentico:${doméstico1.toFixed(2)}m³\nConsumo en riego ${riego1.toFixed(2)}m³\nEl porcentaje que ft³\nConsumo domestico:${doméstico2.toFixed(2)}ft³\nConsumo en riego:${riego2.toFixed(2)}ft³`);
alert(`La cantidad total del segundo tanque en m³ es: ${metroscubicos2.toFixed(2)}m³\n El porcentaje en m³\nConsumo domentico:${doméstico3.toFixed(2)}m³\nConsumo en riego ${riego3.toFixed(2)}m³\nEl porcentaje que ft³\nConsumo domestico:${doméstico4.toFixed(2)}ft³\nConsumo en riego:${riego4.toFixed(2)}ft³`);

console.log(`La cantidad total del primer tanque en m³ es: ${metroscubicos1.toFixed(2)}m³\n El porcentaje en m³\nConsumo domentico:${doméstico1.toFixed(2)}m³\nConsumo en riego ${riego1.toFixed(2)}m³\nEl porcentaje que ft³\nConsumo domestico:${doméstico2.toFixed(2)}ft³\nConsumo en riego:${riego2.toFixed(2)}ft³`);
console.log(`La cantidad total del segundo tanque en m³ es: ${metroscubicos2.toFixed(2)}m³\n El porcentaje en m³\nConsumo domentico:${doméstico3.toFixed(2)}m³\nConsumo en riego ${riego3.toFixed(2)}m³\nEl porcentaje que ft³\nConsumo domestico:${doméstico4.toFixed(2)}ft³\nConsumo en riego:${riego4.toFixed(2)}ft³`);