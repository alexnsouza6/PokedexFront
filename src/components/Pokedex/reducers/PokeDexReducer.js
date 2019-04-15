import FETCH_POKEMON from "../actions/consts";
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMON:
      return { ...state, byID: [...payload] };

    default:
      return state;
  }
};
