import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/weather/searchSlice'

const store = configureStore({
  reducer: {
    search: searchReducer
  }
})

export default store