const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'doughnut', // Tipo de gráfica (Dona)
    data: {
        labels: ['Comida', 'Hogar', 'Compras', 'Transporte', 'Salud'],
        datasets: [{
            data: [2000, 500, 1200, 800, 300], // Estos son los montos
            backgroundColor: [
                '#d98e54', // Naranja (Comida)
                '#a65e2e', // Marrón (Hogar)
                '#4a90e2', // Azul (Compras)
                '#bfa38a', // Café claro (Transporte)
                '#e74c3c'  // Rojo (Salud)
            ],
            borderWidth: 0,
            hoverOffset: 10
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#5d4037',
                    font: { size: 12, weight: 'bold' }
                }
            }
        }
    }
});