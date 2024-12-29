document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    async function obtenerProductosEnTienda() {
        try {
            const response = await fetch('/scrips/productos.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const posts = await response.json();
            const sectionProducto = document.querySelector('#producto-card');
            sectionProducto.innerHTML = '';
            posts.productos.forEach(post => {
                const html = `
                <article class="card">
                    <img src="./img/${post.image}" alt="${post.title}" width="299">
                    <div class="card-content">
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <p>Precio: $${post.precio.toFixed(2)}</p> 
                        <button class="btn-card" data-id="${post.id}" data-title="${post.title}" data-price="${post.precio}">Agregar al carrito</button>
                    </div>
                </article>
`;
                sectionProducto.innerHTML += html;
            });

            document.querySelectorAll('.btn-card').forEach(button => {
                button.addEventListener('click', event => {
                    event.preventDefault();
                    const id = event.target.dataset.id;
                    const title = event.target.dataset.title;
                    const price = parseFloat(event.target.dataset.price);
                    addToCart(id, title, price);
                });
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function addToCart(id, title, price) {
        const item = cart.find(product => product.id === id);
        if (item) {
            item.quantity += 1;
        } else {
            cart.push({ id, title, price, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Producto ${title} agregado al carrito!`);
    }

    obtenerProductosEnTienda();
});


