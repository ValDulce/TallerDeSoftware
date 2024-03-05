let carrito = [];
let total = 0;

function addToCart(productName) {
    cartProducts.push(productName);
    updateCartCount();
    // Guardar los productos en el almacenamiento local
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

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

document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el contenedor del carrito y el contador
    var userCart = document.getElementById("user-cart");
    var cartCount = document.getElementById("cart-count");

    // Verificar si hay productos en el almacenamiento local
    var storedCart = localStorage.getItem("cartProducts");
    var cartProducts = storedCart ? JSON.parse(storedCart) : [];

    // Función para agregar un producto al carrito
    function addToCart(productName) {
        cartProducts.push(productName);
        updateCartCount();
        // Guardar los productos en el almacenamiento local
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }

    // Función para actualizar el contador del carrito
    function updateCartCount() {
        var count = cartProducts.length;
        cartCount.textContent = count;
    }

    // Agregamos eventos de clic a los botones "add-cart" en cada producto
    var addCartButtons = document.querySelectorAll(".add-cart");
    addCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var productName = this.closest(".content-card-product").querySelector("h3").textContent;
            addToCart(productName);
        });
    });

    // Actualizar el contador del carrito al cargar la página
    updateCartCount();
});

