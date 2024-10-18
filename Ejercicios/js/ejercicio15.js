/*15. Verificación de contraseña:
Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña
predefinida. */

const contraseña1 = 'primeratarea';
const contraseña2 = prompt('Ingrese la contraseña');

if(contraseña1 === contraseña2){
    alert(`La contraseña es correcta`);
    console.log(`La contraseña es correta, ${contraseña1} = ${contraseña2}`);
    

}else{
    alert(`LA CONTRASEÑA ES INCORRECTA`);
    console.log('LA CONTRASEÑA ES INCORRECTA,', contraseña1, '=/', contraseña2);
}