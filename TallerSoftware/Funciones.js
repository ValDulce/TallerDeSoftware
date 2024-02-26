let carrito = [];
let total = 0;

function agregarAlCarrito(idProducto, precio) {
    const indiceProducto = carrito.findIndex(item => item.id === idProducto);

    if (indiceProducto !== -1) {
        carrito[indiceProducto].cantidad += 1;
    } else {
        carrito.push({ id: idProducto, precio: precio, cantidad: 1 });
    }

    total += precio;
    actualizarCarrito();
}

function quitarDelCarrito(idProducto, precio) {
    const indiceProducto = carrito.findIndex(item => item.id === idProducto);

    if (indiceProducto !== -1) {
        if (carrito[indiceProducto].cantidad > 1) {
            carrito[indiceProducto].cantidad -= 1;
        } else {
            carrito.splice(indiceProducto, 1);
        }

        total -= precio;
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    // Limpiar lista
    listaCarrito.innerHTML = '';

    // Actualizar lista de productos en el carrito
    carrito.forEach(item => {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = `Producto ${item.id}: ${item.cantidad} x $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(elementoLista);
    });

    // Actualizar total
    totalElemento.textContent = `$${total.toFixed(2)}`;
}
