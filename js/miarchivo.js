//Calcular el 25% de descuento en una compra

//Definir variables
let nombre = prompt("Ingrese el nombre del cliente: ");
let cantidad = parseFloat(prompt("Ingrese cantidad de productos: "));
let total = 0;
let descuento = 25;
let precioFinal = 0;

//for
for (let i=1 ; i <= cantidad ; i++) {
    let precio = parseFloat(prompt("Ingrese precio del articulo " + i + ":"));
    total = total + precio;
}

//Calcular precio final y mostrarlo
precioFinal = total - ((descuento*total)/100);
alert("El precio final para " + nombre + " es de: $ " + precioFinal);

