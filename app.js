async function cargarCartas() {
    try {
        const respuesta = await fetch('data/troops.json');
        
        if (!respuesta.ok) throw new Error("No pude encontrar el archivo JSON");
        
        const tropas = await respuesta.json();
        console.log("Cartas cargadas:", tropas); // Esto te dirá en la consola si leyó algo

        if (tropas.length === 0) {
            console.warn("El archivo JSON está vacío.");
        }

        const contenedor = document.getElementById('container-cartas');

        tropas.forEach(carta => {
            const cardElement = document.createElement('div');
            // ... (el resto de tu código igual)
            cardElement.innerHTML = `
                <h3>${carta.name}</h3>
                <img src="${carta.image_path}" alt="${carta.name}" style="width: 100px;">
            `;
            contenedor.appendChild(cardElement);
        });
    } catch (error) {
        console.error("Error al cargar:", error);
    }
}

cargarCartas();

