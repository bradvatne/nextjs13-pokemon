"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { pokemonApi } from "../store/pokemonApi";
import { Pokemon } from "../types";

import { RootState, AppDispatch } from "../store";
import { setSearch } from "../store/searchSlice";

import PokemonTable from "./PokemonTable";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPokemon = useAppSelector((state) => state.search.startupPokemon);
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
  );

  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="border-1 border-black border rounded"
      />
      <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
    </div>
  );
};

export default SearchInput;
