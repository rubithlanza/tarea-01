/*19. La compra:
Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
calcule el precio total a pagar por la compra. */

const precio = parseInt(prompt('Ingrese el precio del producto x:'));
const iva = parseInt(prompt('Ingrese el iva del producto:'));

const subtotal = precio * (iva/100);
const total = precio + subtotal;

alert(`El total a pagar es de: ${total.toFixed(2)}lps`);
console.log(`Factura:\nPrecio:${precio}lps\nEl iva:${(iva/100)}\nTotal a pagar:${total}lps`);
