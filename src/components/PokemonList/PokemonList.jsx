import React, { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { CardPokemon } from "../CardPokemon/CardPokemon";
import { Loader } from "../Loader/Loader";
import "./PokemonList.scss";

export const PokemonList = () => {
  const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="card-list-pokemon ">
          {filteredPokemons.length ? (
            <>
              {filteredPokemons?.map((pokemon, index) => (
                <CardPokemon pokemon={pokemon} key={index} />
              ))}
            </>
          ) : (
            <>
              {allPokemons?.map((pokemon) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
