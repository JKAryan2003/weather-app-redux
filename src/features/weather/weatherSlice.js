import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  cities: [],
  weatherData: [],
  error: ""
}

export const fetchCities = createAsyncThunk('weather/fetchCities', async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=753f10661e26a53cb54ef6fd4a1bd6f0&units=metric`)
  return response.data;
})

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=753f10661e26a53cb54ef6fd4a1bd6f0&units=metric`)
  return response.data
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetData: (state) => {
      state.cities = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      state.cities = action.payload
    }),
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weatherData = action.payload
    })
  }
})

export default weatherSlice.reducer
export const {resetData} = weatherSlice.actions
