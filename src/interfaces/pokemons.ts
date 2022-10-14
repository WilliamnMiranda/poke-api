import IStats from "./status";
import ITypes from "./types";
interface IPokemon {
  name: string;
  weight: number;
  height: number;
  stats: IStats[];
  types: ITypes[];
  id: number;
}

export default IPokemon;
