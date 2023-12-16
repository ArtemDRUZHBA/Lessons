const url = 'https://pokeapi.co/api/v2/pokemon/';


const firstPokemon = document.getElementById("firstPokemon");
const secondPokemon = document.getElementById("secondPokemon");
const firstFighter = document.getElementById("firstFighter");
const secondFighter = document.getElementById("secondFighter");
class Pokemon {
    pokemonName = "Pokemon";
    pokemonDamage = 10;
    pokemonHP = 150;
    pokemonId = 1;

    constructor(id) {
        let request = new XMLHttpRequest();
        request.open('GET', url + id);
        request.responseType = 'json';
        request.send();

        request.onload = () => {
            const pokemon = request.response;
            this.pokemonName = pokemon.name;
            this.pokemonDamage = pokemon.height;
            this.pokemonHP = pokemon.weight;
            this.pokemonId = pokemon.id;
            this.createPokemon(firstPokemon);
            this.createPokemon(secondPokemon);
        }
    }

    showStats(pokemon) {
        const stats = document.createElement("div");
        pokemon.innerHTML =
        `
        <h6>Hp: ${this.pokemonHP}</h6>
        <h6>Damage: ${this.pokemonDamage}</h6>
        `
        container.append(stats);        
        console.log(`Name: ${this.pokemonName}, Damage: ${this.pokemonDamage}, HP: ${this.pokemonHP}, Id: ${this.pokemonId}`);
    }

    getDamage(damageCount) {
        console.log(this.pokemonHP);
        this.pokemonHP -= damageCount;
        console.log(this.pokemonHP);
    }

    createPokemon(container) {
        const pokemon = document.createElement("div");
        pokemon.className = 'fighter';
        pokemon.innerHTML =
            `
            <img src="pokemonsImg/${this.pokemonId}.png">
            <h5>${this.pokemonName}</h5>
        `
        pokemon.addEventListener('click', () =>{
            if(pokemon.parentElement == firstPokemon && firstFighter.childElementCount === 0){
                this.createPokemon(firstFighter);
                this.showStats(firstFighter);
                pokemon.remove();
            }
        });
        pokemon.addEventListener('click', () =>{
            if(pokemon.parentElement == secondPokemon && secondFighter.childElementCount === 0){
                this.createPokemon(secondFighter);
                this.showStats(secondFighter);
                pokemon.remove();
            }
        });
        pokemon.addEventListener('click', () =>{
            if(pokemon.parentElement == firstFighter || pokemon.parentElement == secondFighter){
                pokemon.remove();
            }
        });

        container.append(pokemon);
    }
}

let pokemonsArray = new Array();

for(let i = 0; i < 10; i++){
    pokemonsArray[0] = new Pokemon(i + 1);
}