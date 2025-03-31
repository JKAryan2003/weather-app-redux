import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cities: [],
  coordinates: {
    lat: "20.2602964",
    lon: "85.8394521"
  },
  error: ""
}

export const fetchCities = createAsyncThunk('weather/fetchCities', async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=753f10661e26a53cb54ef6fd4a1bd6f0`)
  return response.data;
})

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (initialState) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${initialState.coordinates.lat}&lon=${initialState.coordinates.lon}&appid=753f10661e26a53cb54ef6fd4a1bd6f0`)
  return response.data
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCoordinates: (state, action) => {
      state.coordinates.lat = action.payload.lat
      state.coordinates.lon = action.payload.lon
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.pending, (state, action) => {
      state.loading = true
    }),
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload
    })
  }
})

export default weatherSlice.reducer