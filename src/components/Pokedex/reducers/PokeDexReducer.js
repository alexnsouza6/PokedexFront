import { FETCH_POKEMON, POKEMON_CREATE, POKEMON_EDIT } from "../actions/consts";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMON:
      return { ...state, byID: [...payload] };

    case POKEMON_CREATE:
      return { ...state, ...payload };

    case POKEMON_EDIT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
