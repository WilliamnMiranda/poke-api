import Api from "../helpers/api"
import IPokemon from "../interfaces/pokemons"
const pokemonServices = {
    getAll : async function () {
        return (await Api.get('/pokemon?limit=52')).data.results
    },
    getStatusByUrl : async function (url : string) {
       const response = await fetch(url)
       const data : IPokemon = await response.json();
       return data
    },
    getByIdOrName : async function (pokemon : string | number) {
        return (await Api.get(`/pokemon/${pokemon}`)).data
    },
    getByType : async function (type : string){
        const a =  (await Api.get(`/type/${type}`)).data.pokemon
        console.log(a)
        return a
    }
}

export default pokemonServices