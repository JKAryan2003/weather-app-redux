import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  places: [],
  error: ""
}

export const fetchPlaces = createAsyncThunk('weather/fetchPlaces', async (city) => {

  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=753f10661e26a53cb54ef6fd4a1bd6f0`)
  return response.data;
})

const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlaces.pending, (state, action) => {
      state.loading = true
    }),
    builder.addCase(fetchPlaces.fulfilled, (state, action) => {
      state.places = action.payload
    })
  }
})

export default searchSlice.reducer