document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('lista-tropas');

    fetch('data/troops.json')
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = '';
            data.forEach(tropa => {
                const div = document.createElement('div');
                div.className = 'tropa-card';
                div.innerHTML = `
                    <img src="${tropa.imagen_url}" alt="${tropa.nombre}">
                    <h3>${tropa.nombre}</h3>
                    <p>${tropa.rareza}</p>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch(err => {
            contenedor.innerHTML = '<p>Error al cargar: ' + err + '</p>';
        });
});
