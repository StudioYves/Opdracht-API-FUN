//GET RANDOM ID
const id = Math.floor(Math.random() * 900) + 1
console.log(id)

//MAKE URL
const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//FETCH API
const getPokemon = async function() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
};

const getPokeName = function(pokeData) {
    const pokeName = pokeData.name;
    return pokeName;
}

const getPokeImage = function(pokeData) {
    const pokeImage = pokeData.sprites.front_default;
    return pokeImage;
}

const pokeList = document.getElementById("list");

//CLEAN DOM BEFORE NEW SELECTION
const removeSelection = () => {
    pokeList.innerHTML = "";
}

//HIT BUTTON
const hitButtonToDom = function(pokemon) {
    // ADD EVENT LISTENER TO BUTTON
    const button = document.querySelector("#btn");
    const clickButton = button.addEventListener('click', function(){
        removeSelection();
    //Create HTML elements
    const listItem = document.createElement("li");
    const nameHeader = document.createElement("h2");
    //Get name and image and make text node and image element
    const pokemonName = getPokeName(pokemon);
    const textNode= document.createTextNode(pokemonName);
    const imgUrl = pokemon.sprites.front_default;
    const imgElement = document.createElement("img");
    imgElement.setAttribute('src', imgUrl);
    //Stick it together
    nameHeader.appendChild(textNode); 
    listItem.appendChild(imgElement);
    listItem.appendChild(nameHeader);
    pokeList.appendChild(listItem);
    });   
};

//SHOW POKEMON INFO
const showPokeInfo = async function() {
    const pokemon = await getPokemon();
    const pokeName = getPokeName(pokemon);
    const pokeImage = getPokeImage(pokemon);
    console.log(pokeName);
    console.log(pokeImage);
    hitButtonToDom(pokemon);
}

showPokeInfo();













