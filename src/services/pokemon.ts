import Api from "../helpers/api";
import IPokemon from "../interfaces/pokemons";
const pokemonServices = {
  getAll: async function () {
    return (await Api.get("/pokemon?limit=20")).data;
  },
  getStatusByUrl: async function (url: string) {
    const response = await fetch(url);
    const data: IPokemon = await response.json();
    return data;
  },
  getByIdOrName: async function (pokemon: string | number) {
    try {
      return (await Api.get(`/pokemon/${pokemon}`)).data;
    } catch (e) {
      return null;
    }
  },
  getByType: async function (type: string) {
    return (await Api.get(`/type/${type}`)).data.pokemon;
  },
};

export default pokemonServices;
