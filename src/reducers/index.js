import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import pokemonReducer from "../components/Pokedex/reducers/PokeDexReducer";

export default combineReducers({
  pokemons: pokemonReducer,
  form: formReducer
});
