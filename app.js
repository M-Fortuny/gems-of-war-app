async function cargarCartas() {
    try {
        const respuesta = await fetch('data/troops.json');
        const tropas = await respuesta.json();

        const contenedor = document.getElementById('container-cartas');

        tropas.forEach(carta => {
            const cardElement = document.createElement('div');
            cardElement.style.border = "1px solid #ccc";
            cardElement.style.padding = "10px";
            cardElement.style.width = "200px";

            cardElement.innerHTML = `
                <h3>${carta.name}</h3>
                <p><strong>Tipo:</strong> ${carta.type}</p>
                <p><strong>Colores:</strong> ${carta.mana_colors.join(', ')}</p>
                <p><strong>Habilidad:</strong> ${carta.ability}</p>
                <img src="${carta.image_path}" alt="${carta.name}" style="width: 100%;">
            `;

            contenedor.appendChild(cardElement);
        });
    } catch (error) {
        console.error("Error al cargar las cartas:", error);
    }
}

// Ejecutar la función
cargarCartas();
