/*16. Atletas:
Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
y segundos. */

const minuto1 = parseInt(prompt('Ingese los minutos del primer atleta:'));
const segundo1 = parseInt(prompt('Ingrese lo segundos del primer atleta: '));
const minuto2 = parseInt(prompt('Ingese los minutos del segundo atleta:'));
const segundo2 = parseInt(prompt('Ingrese lo segundos del segundo atleta: '));

const minuto3 = ((minuto1 + minuto2) * 60);
const segundoTotal = ((segundo1 + segundo2) + minuto3);
const minutoTotal = ((segundoTotal)/60);
const hora = (minutoTotal/60);

alert(`Los segundos totales de ambos atletas es de: ${segundoTotal}s`)
alert(`Los minutos totales de ambos atletas es de: ${minutoTotal}min`)
alert(`Las horas totales de ambos atletas es de: ${hora}h`)
console.log(`El total de horas de ambos atletas es de: ${hora}h \nEn minutos ${minutoTotal}min \nEn segundos ${segundoTotal}s`);

