import { GET_SONGS } from "../actions";
const initialState = {
  available: [],
};
const searchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        available: action.payload,
      };

    default:
      return state;
  }
};
export default searchSongsReducer;
