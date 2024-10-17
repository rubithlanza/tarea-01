/*4. Área de un triángulo:
Pida la base y la altura de un triángulo y calcula su área. */

const base = parseInt(prompt('Digite la base del triangulo'));
const altura = parseInt(prompt('Digite la altura del triangulo'));

const area = ((base * altura) / 2);

alert(`Su area es: ${area} cm`);
console.log(`El area del triangulo por la base y la altura es: ${area} cm`) ;