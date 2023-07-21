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
    <div className="card-list-search">
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((pokemon) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))
      ) : (
        <>
          <div className="search-error">
            <p className="text-search">Something went wrong...</p>
          </div>
        </>
      )}
    </div>
  );
};
