import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import "./SearchPage.scss";

export const SearchPage = () => {
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);

  const filteredPokemons = globalPokemons.filter((pokemon) => {
    return pokemon.name.startsWith(location.state.toLowerCase());
  });

  return (
    <div className="container">
      <p className="p-search"></p>
      <div className="card-list-pokemon">
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))
        ) : (
          <p>Something went wrong...</p>
        )}
      </div>
    </div>
  );
};
