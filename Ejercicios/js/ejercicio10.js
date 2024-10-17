/*10. Área de un círculo:
Solicite el radio de un círculo y calcule su área. */

const radio = parseInt(prompt('Ingrese el radios del circulo'));

const area = Math.PI * (Math.pow(radio, 2));

alert(`El area del circulo es de: ${area} cm²`);
console.log('El area del circulo es de:', area, 'cm²');
