import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { EMPTY_ARRAY } from 'common/constants';
import { API_CALL_STATUS, FetchPlanetsResponse, Planet } from 'common/types';

export interface PlanetState {
  planets: FetchPlanetsResponse;
  planetLoadStatus: API_CALL_STATUS;
}

const initialState: PlanetState = {
  planets: {
    count: 0,
    next: null,
    previous: null,
    results: EMPTY_ARRAY,
  },
  planetLoadStatus: 'INIT',
};

export const fetchPlanets = createAsyncThunk<FetchPlanetsResponse, string | void>(
  'planets/fetch',
  async (url) => fetch(url || 'https://swapi.dev/api/planets').then((res) => res.json())
);

const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.pending, (state) => {
      state.planetLoadStatus = 'LOADING';
    });
    builder.addCase(fetchPlanets.rejected, (state) => {
      state.planetLoadStatus = 'ERROR';
    });
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.planets = action.payload;
      state.planetLoadStatus = 'SUCCESS';
    });
  },
});

export const planetActions = planetSlice.actions;

const getPlanetSlice = (state: { planetSlice: PlanetState }) => state.planetSlice;

export const getPlanetByNameSelector = createSelector(
  [getPlanetSlice, (state, planetName) => planetName],
  (planetSlice, planetName) =>
    planetSlice?.planets?.results?.find((planet) => planet.name === planetName)
);

export default planetSlice.reducer;
