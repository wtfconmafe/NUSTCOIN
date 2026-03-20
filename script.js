let categoriaActual = "Comida";

// 1. Cambiar el monto total al tocar la tarjeta
function cambiarIngreso() {
    const nuevoMonto = prompt("Introduce tu nuevo balance total:", "5000");
    if (nuevoMonto !== null && !isNaN(nuevoMonto)) {
        document.getElementById('monto-total').innerText = nuevoMonto;
    }
}

// 2. Seleccionar categoría
function seleccionarCat(elemento, nombre) {
    // Quitar clase active de todos
    const items = document.querySelectorAll('.cat-item');
    items.forEach(item => item.classList.remove('active'));
    
    // Añadir al seleccionado
    elemento.classList.add('active');
    categoriaActual = nombre;
    document.getElementById('cat-seleccionada').innerHTML = `Categoría: <strong>${nombre}</strong>`;
}

// 3. Registrar el gasto
function registrarGasto() {
    const input = document.getElementById('input-gasto');
    const lista = document.getElementById('lista-actividad');
    const montoTotalElem = document.getElementById('monto-total');
    
    const montoGasto = parseFloat(input.value);
    const balanceActual = parseFloat(montoTotalElem.innerText);

    if (isNaN(montoGasto) || montoGasto <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }

    // Restar del balance
    montoTotalElem.innerText = (balanceActual - montoGasto).toFixed(2);

    // Quitar mensaje de lista vacía si existe
    if (document.querySelector('.empty-msg')) {
        lista.innerHTML = '';
    }

    // Crear elemento en la lista
    const item = document.createElement('div');
    item.className = 'activity-item';
    item.innerHTML = `
        <span><strong>${categoriaActual}</strong></span>
        <span style="color: #ec8c50; font-weight: bold;">-$${montoGasto}</span>
    `;

    // Agregar al inicio de la lista
    lista.insertBefore(item, lista.firstChild);

    // Limpiar input y vibrar (si es móvil)
    input.value = '';
    if (window.navigator.vibrate) window.navigator.vibrate(50);
}
// Busca el botón de la campana en la barra de navegación
const botonCampana = document.querySelector('.fa-bell').parentElement;

if (botonCampana) {
    botonCampana.onclick = function() {
        // MUY IMPORTANTE: El nombre debe ser idéntico al de tu archivo
        window.location.href = 'notificaciones.html'; 
    };
}