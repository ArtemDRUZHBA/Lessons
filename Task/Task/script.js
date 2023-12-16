const url = 'https://pokeapi.co/api/v2/pokemon/';
const resultElement = document.getElementById('result');
const searchElement = document.getElementById('search');
const submitElement = document.getElementById('submit');
const pokemonList = document.getElementById('pokemon_list');
const btnNext = document.getElementById('next_page');
const btnBack = document.getElementById('back_page');
const count = document.getElementById('count');
const n15 = document.getElementById('n15');
const n30 = document.getElementById('n30');
const n60 = document.getElementById('n60');

const xhr = new XMLHttpRequest();
let elementCount = 15;
let firstElementNumber = 1;

submitElement.addEventListener('click', function (event) {
    search(searchElement.value);
})

function search(pockemonName) {
    xhr.open('GET', url + pockemonName.toLowerCase());
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        let pokemon = xhr.response;
        drawPokemon(pokemon);
        console.log(pokemon);
    }
}

function pagination() {
    pokemonList.innerHTML = "";
    for (let i = firstElementNumber; i < firstElementNumber + elementCount; i++) {
        let request = new XMLHttpRequest;
        request.open('GET', url + i);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
            const pokemon = request.response;
            const name = pokemon.name;
            let element = document.createElement("li");
            element.innerHTML = name;
            element.addEventListener('click', () => { search(element.innerHTML) });
            pokemonList.append(element);
        }
    }
    count.innerHTML = `${firstElementNumber}-${firstElementNumber + elementCount - 1}`;
}

pagination();

function drawPokemon(pokemon) {
    resultElement.innerHTML = '';
    let pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.innerHTML = `
        <p>id: #${pokemon.id}</p>
        <hr>
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}">
    `

    let typeList = document.createElement('ul');
    populateListWithTypes(pokemon.types, typeList)
    pokemonElement.appendChild(typeList);

    resultElement.appendChild(pokemonElement);
}

function populateListWithTypes(types, ul) {
    types.forEach(function (type) {
        let typeItem = document.createElement('li');
        typeItem.innerText = type.type.name;
        ul.appendChild(typeItem);
    });
}

btnNext.addEventListener('click', () => {
    if (firstElementNumber + elementCount <= 1017)
        firstElementNumber += elementCount;
    pagination();
});
btnBack.addEventListener('click', () => {
    if (firstElementNumber > elementCount) {
        firstElementNumber -= elementCount;
        pagination();
    }
});
n15.addEventListener('click', () => {
    if (elementCount != 15) {
        elementCount = 15;
        pagination();
    }
});
n30.addEventListener('click', () => {
    if (elementCount != 30) {
        elementCount = 30;
        pagination();
    }
});
n60.addEventListener('click', () => {
    if (elementCount != 60) {
        elementCount = 60;
        pagination();
    }
});