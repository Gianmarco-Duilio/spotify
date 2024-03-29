import { GET_SELECTED } from "../actions";
const initialState = {
  select: null,
};
const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED:
      return {
        ...state,
        select: action.payload,
      };

    default:
      return state;
  }
};
export default selectedSongReducer;
