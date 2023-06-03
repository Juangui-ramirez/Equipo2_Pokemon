let url = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async () => {
    try{
        const res = await fetch(`${url}/pokemon`);
        const data = await res.json();
        data.results.forEach(async (pokemon) => {
            const name = pokemon.name;
            document.querySelector(".namePoke").appendChild(".card")
        });
    } catch(error){
        alert ("error");
    }
}