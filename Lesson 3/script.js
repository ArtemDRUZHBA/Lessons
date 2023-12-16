const header = document.querySelector("header");//записываем в константу объект с тегом
const section = document.querySelector("section");//записываем в константу объект с тегом
const rURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', rURL);
request.responseType = "text";
request.send();

request.onload = function(){
    const superHeroesText = request.response;
    const superHeroes = JSON.parse(superHeroesText);
    setHeader(superHeroes);
    showHeroes(superHeroes);
}

function setHeader(jsonObj){
    header.innerHTML = `
    <h1>${jsonObj['squadName']}</h1>
    <h3>Home town: ${jsonObj['homeTown']},
    Formed: ${jsonObj['formed']},
    Base: ${jsonObj['secretBase']}
    </h3>
    `
}

function showHeroes(jsonObj){
    section.innerHTML = "";
    let powers;
    let heroes = jsonObj['members'];
    heroes.forEach((hero) => {
        hero.powers.forEach((power)=>{
            powers = powers + power + " ";
        });
        let article = `
        <article>
            <h1>${hero.name}</h1>
            <h1>${hero.age}</h1>
            <h1>${hero.secretIdentity}</h1>
            <h1>${powers}</h1>
        </article>
        `
        console.log(hero);
        section.innerHTML += article;
        powers = "";
    });
    
}