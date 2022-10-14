import {
  BsLightningFill,
  BsDropletFill,
  BsFlower1,
  BsMoonFill,
  BsSnow
} from "react-icons/bs";
import {
  GiBatwingEmblem,
  GiBee,
  GiPoisonBottle,
  GiFlyingBeetle,
  GiFairyWings,
  GiSteelClaws,
  GiPsychicWaves,
  GiStarfighter,
  GiRockGolem
} from "react-icons/gi";
import { FaCampground } from "react-icons/fa";
import { ImFire } from 'react-icons/im'
import { SiGhostery } from "react-icons/si";

export const pokemonTypes: { name: string, color: string, icon?: JSX.Element }[] = [
  {
    name: "bug",
    color: "#42E60B",
    icon: <GiBee />
  },
  {
    name: "dark",
    color: "#726382",
    icon: <BsMoonFill />
  },
  {
    name: "dragon",
    color: "#0076ff",
    icon: <GiBatwingEmblem />
  },
  {
    name: "electric",
    color: "#cac75d",
    icon: <BsLightningFill />
  },
  {
    name: "fairy",
    color: "#E85FA4",
    icon: <GiFairyWings />
  },
  {
    name: "fighting",
    color: "#ff215b",
    icon: <GiStarfighter />
  },
  {
    name: "fire",
    color: "#FF813B",
    icon: <ImFire />
  },
  {
    name: "flying",
    color: "#2E8CD5",
    icon: <GiFlyingBeetle />
  },
  {
    name: "ghost",
    color: "#503CE8",
    icon: <SiGhostery />
  },
  {
    name: "grass",
    color: "#4DB85F",
    icon: <BsFlower1 />
  },
  {
    name: "ground",
    color: "#ff6b0d",
    icon: <FaCampground />
  },
  {
    name: "ice",
    color: "#25E3FA",
    icon: <BsSnow />
  },
  { name: "normal", color: "#9fa39d" },
  {
    name: "poison",
    color: "#AA4FC7",
    icon: <GiPoisonBottle />
  },
  {
    name: "psychic",
    color: "#E84F81",
    icon: <GiPsychicWaves />
  },
  {
    name: "rock",
    color: "#F0C059",
    icon: <GiRockGolem />
  },
  {
    name: "steel",
    color: "#1E82D4",
    icon: <GiSteelClaws />
  },
  {
    name: "water",
    color: "#2E8CD5",
    icon: <BsDropletFill />
  },
];
