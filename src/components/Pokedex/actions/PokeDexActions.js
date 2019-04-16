import { FETCH_POKEMON } from "./consts";
import axios from "axios";

export const fetchPokemons = () => async dispatch => {
  const response = await axios.get(
    `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons`
  );
  dispatch({ payload: response.data, type: FETCH_POKEMON });
};
