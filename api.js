async function obtenerPokemon() {
    let urlApi = "";
    const contenedor = document.getElementById('contenedor-pokemon');
    let pokemonId = document.getElementById('pokemon').value;
    if (pokemonId) {

        urlApi = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        try {
        const respuesta = await fetch(urlApi);
        const pokemon = await respuesta.json();
        const nombre = pokemon.name.toUpperCase();
        const imagenUrl = pokemon.sprites.front_default;
        const tipo = pokemon.types[0].type.name;
        contenedor.innerHTML = `
            <h2>${nombre}</h2>
            <img src="${imagenUrl}" alt="${nombre}">
            <p><strong>Tipo:</strong> ${tipo}</p>`;
    } catch (error) {
        console.error('Error al conectar con la PokeAPI:', error);
        contenedor.innerHTML = '<p>No se pudo cargar el Pokémon.</p>';
    }
    }else {
        contenedor.innerHTML = '<p>Por favor, ingresa un ID de Pokémon válido.</p>';
    }
    
}