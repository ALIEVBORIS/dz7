import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemons(state, action) {
      state.pokemons = [];
    },
  },
});

export default pokemonSlice.reducer;

export const { getPokemons } = pokemonSlice.actions;
