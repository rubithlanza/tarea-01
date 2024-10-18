/*11. Verificación de un número primo:
Pida un número y verifique si es primo o no. */

const numero = parseInt(prompt('Digite un numero:'));

let primo = true;

for(let i=2; i<numero; i++){
    if(numero % i ==0){
        primo = false
    }
}
if(primo == true){
    alert(`El numero ${numero} es Primo`);
    console.log(`El numero ${numero} es Primo`);  
}else{
    alert(`El numero ${numero} no es Primo`);
    console.log(`El numero ${numero}no es Primo`);
    
}