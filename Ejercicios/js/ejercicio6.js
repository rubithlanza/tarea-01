/*6. Concatenación de cadenas:
Capture de forma separada los 2 nombres y los dos apellidos de una persona y luego
almacene en una variable los valores por medio de una concatenación y muéstrelo en la
consola. */

const nombre1 = prompt('Ingrese el primer nombre:');
const nombre2 = prompt('Ingrese el primer nombre:');
const apellido1 = prompt('Ingrese el primer nombre:');
const apellido2= prompt('Ingrese el primer nombre:');

const concatenación = nombre1 +" "+ nombre2 + " " + apellido1 + " " + apellido2;
alert(`El nombre completo es: ${concatenación}`);
console.log('La Concatenacion de los nombres y los apellidos es:', concatenación);
