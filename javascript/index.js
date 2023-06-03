let url = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async () => {
    try{
        const res = await fetch(`${url}?limit=25`);
        const data = await res.json();
        data.results.forEach(async (pokemon) => {
            const name = pokemon.name;
            document.querySelector(".namePoke").textContent = name;
        });
    } catch(error){
        alert ("error");
    }
}
getPokemon();