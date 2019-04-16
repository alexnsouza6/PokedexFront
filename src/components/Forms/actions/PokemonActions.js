import axios from "axios";
import { POKEMON_CREATE, POKEMON_EDIT } from "../../Pokedex/actions/consts";

export const createPokemon = (pokemonInfo, callback) => async dispatch => {
  const response = await axios.post(
    `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons`,
    pokemonInfo
  );
  dispatch({ payload: response.data, type: POKEMON_CREATE });
  callback();
};

export const editPokemon = (
  pokemonInfo,
  pokemonID,
  callback
) => async dispatch => {
  const response = await axios.patch(
    `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons/${pokemonID}`,
    pokemonInfo
  );
  dispatch({ payload: response.data, type: POKEMON_EDIT });
  callback();
};
