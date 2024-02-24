let cart = [];
let total = 0;

function addToCart(productId, price) {
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ id: productId, price: price, quantity: 1 });
    }

    total += price;
    updateCart();
}

function removeFromCart(productId, price) {
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
            cart[productIndex].quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }

        total -= price;
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');

    // Limpiar lista
    cartList.innerHTML = '';

    // Actualizar lista de productos en el carrito
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = Producto ${item.id}: ${item.quantity} x $${item.price.toFixed(2)};
        cartList.appendChild(listItem);
    });

    // Actualizar total
    totalElement.textContent = $${total.toFixed(2)};
}