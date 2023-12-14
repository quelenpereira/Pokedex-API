const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemonPromises = []

    for (let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
        
    }

    Promise.all(pokemonPromises)
    .then(pkemons => {
        console.log(pokemons)
    })
}

fetchPokemon()