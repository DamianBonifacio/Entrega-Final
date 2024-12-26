document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.items');

    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5">No hay productos en el carrito.</td></tr>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = `
                <tr>
                    <td>${item.title}</td>
                    <td class="quantity-controls">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        ${item.quantity}
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </td>
                    <td>${item.price}</td>
                    <td>${subtotal}</td>
                    <td><button class="remove-item" data-id="${item.id}">Eliminar</button></td>
                </tr>
            `;
            cartItems.innerHTML += row;
        });

        // Mostrar el total del carrito
        const totalElement = document.createElement('tr');
        totalElement.innerHTML = `
            <td colspan="3"></td>
            <td><strong>Total:</strong> $${total.toFixed(2)}</td>
            <td></td>
        `;
        cartItems.appendChild(totalElement);

        // Agregar funcionalidad para eliminar productos
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                removeFromCart(itemId);
                updateCartDisplay();
            });
        });

        // Agregar funcionalidad para aumentar la cantidad
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                increaseQuantity(itemId);
                updateCartDisplay();
            });
        });

        // Agregar funcionalidad para disminuir la cantidad
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                decreaseQuantity(itemId);
                updateCartDisplay();
            });
        });
    }
});

function removeFromCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert("Producto eliminado del carrito");
}

function increaseQuantity(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.map(item => {
        if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function decreaseQuantity(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.map(item => {
        if (item.id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<tr><td colspan="5">No hay productos en el carrito.</td></tr>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const row = `
                <tr>
                    <td>${item.title}</td>
                    <td class="quantity-controls">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        ${item.quantity}
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </td>
                    <td>${item.price}</td>
                    <td>${subtotal}</td>
                    <td><button class="remove-item" data-id="${item.id}">Eliminar</button></td>
                </tr>
            `;
            cartItems.innerHTML += row;
        });

        // Mostrar el total del carrito
        const totalElement = document.createElement('tr');
        totalElement.innerHTML = `
            <td colspan="3"></td>
            <td><strong>Total:</strong> $${total.toFixed(2)}</td>
            <td></td>
        `;
        cartItems.appendChild(totalElement);

        // Agregar funcionalidad para eliminar productos
        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                removeFromCart(itemId);
                updateCartDisplay();
            });
        });

        // Agregar funcionalidad para aumentar la cantidad
        const increaseButtons = document.querySelectorAll('.increase-quantity');
        increaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                increaseQuantity(itemId);
                updateCartDisplay();
            });
        });

        // Agregar funcionalidad para disminuir la cantidad
        const decreaseButtons = document.querySelectorAll('.decrease-quantity');
        decreaseButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemId = button.dataset.id;
                decreaseQuantity(itemId);
                updateCartDisplay();
            });
        });
    }
}
