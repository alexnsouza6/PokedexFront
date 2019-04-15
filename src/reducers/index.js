import { combineReducers } from "redux";
import pokemonReducer from "../components/Pokedex/reducers/PokeDexReducer";

export default combineReducers({
  pokemons: pokemonReducer
});
