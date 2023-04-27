import React from "react";
import PokemonTable from "./PokemonTable";
import { store } from "../store";

const SSRPokemonTable = () => {
  return (
    <div>
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </div>
  );
};

export default SSRPokemonTable;
