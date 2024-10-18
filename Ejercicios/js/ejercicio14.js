/*14. Comparación de cadenas:
Solicite dos cadenas de texto y compare si son iguales o diferentes. */

const texto1 = prompt('Ingrese el primer texto');
const texto2 = prompt('Ingrese el segundo texto');

if(texto1 === texto2){
    alert(`El primer texto ${texto1} es igual al segundo texto ${texto2}`);
    console.log(`El primer texto ${texto1} es igual al segundo texto ${texto2}`);
    

}else{
    alert(`NINGUNO DE LOS TEXTOS ES IGUAL`);
    console.log('NINGUNO DE LOS TEXTOS SON IGUALES');
}