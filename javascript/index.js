let url = "https://pokeapi.co/api/v2/pokemon";

const getPokemon = async () => {
    try{
        const res = await fetch(`${url}/pokemon`);
        const data = await res.json();
        data.results.forEach(async (pokemon)) => {
            document.querySelector(".namePoke")
        }
    }
}