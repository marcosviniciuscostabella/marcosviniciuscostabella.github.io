var cesta = ['Pan', 'Agua'];
/*var cesta = Array();
var cesta = new Array(); // estas tres formas son válidas para hacer un array*/

function mostrarCesta(){
    console.log(cesta);

}
function mostrarProducto(indice){
    console.log(cesta[indice]);//Accesi a la posición 'indice' del array
}

function modificarProducto(indice, item){
    cesta[indice]=item;
}

function agregarProducto(item) {
    cesta.push(item);//Agregar elemento al array
}

agregarProducto("Queso");
mostrarCesta();//['Pan', 'Agua', 'Queso']
mostrarProducto(1);//Agua
modificarProducto(2, "Queso");
mostrarProducto(2);