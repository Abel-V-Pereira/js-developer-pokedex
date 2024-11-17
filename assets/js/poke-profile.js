const pokemonProfile = document.getElementById('profile');

function convertPokemonToProfile(pokemon) {
    return `
        <div class="bulbasaur-profile">
            <p class="name">Bulbasaur</p>
            <span class="dex-number">#1</span>
            <div class="type">
                <span class="type">Grass</span>
                <span class="type">Poison</span>
            </div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">
            
            <div class="about">
                <p>About</p>
                <ul class="info">
                    <li><span>Base Happiness:</span> 50</li>
                    <li><span>Capture Rate:</span> 45</li>
                    <li><span>Color:</span> Green</li>
                    <li><span>Gen:</span> 1º</li>
                    <li><span>Habitat:</span> Grassland</li>
                    <li><span>Shape:</span> Quadruped</li>
                </ul>
            </div>
        </div>
    `
}

function loadPokemonProfile() {
    pokemonProfile.innerHTML += convertPokemonToProfile()
}

loadPokemonProfile()
