import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchSongsReducer from "../reducers/search";
import selectedSongReducer from "../reducers/selected";

const unifiedReducer = combineReducers({
  search: searchSongsReducer,
  select: selectedSongReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});
export default store;
