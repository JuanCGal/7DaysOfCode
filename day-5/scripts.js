const frutasYVerduras = [];
const carnes = [];
const lacteos = [];
let producto;
let salir;
let categoriaAlimento;

salir = prompt('¿Deseas agregar un alimento a tu carrito? Escribe si para agregar o no para salir');

while(salir != "no"){

    producto = prompt('Escribe el alimento que deseas agregar');

    categoriaAlimento = prompt('¿En que categoría se encuentra el alimento? Escribe 1 para Frutas y verduras, 2 para carne o 3 si es lácteo');
 
        if(categoriaAlimento == 1){
            frutasYVerduras.push(producto);
        }else if(categoriaAlimento == 2){
            carnes.push(producto);
        }else if( categoriaAlimento == 3){
            lacteos.push(producto);
        }else{
            alert('No se agregó porque no elegiste una opción válida');
        }
    
    salir = prompt('¿Deseas agregar otro alimento a tu carrito? Escribe si para agregar o no para salir');
}

console.log(`Frutas y verduras: ${frutasYVerduras}`);
console.log(`Carnes: ${carnes}`);
console.log(`Lácteos: ${lacteos}`);