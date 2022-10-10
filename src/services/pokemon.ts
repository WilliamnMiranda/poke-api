import Api from "../helpers/api"

const pokemonServices = {
    getAll : async () => {
        const pokemons = await (await Api.get('?limit=50')).data
        console.log(pokemons)
    }
}

export default pokemonServices