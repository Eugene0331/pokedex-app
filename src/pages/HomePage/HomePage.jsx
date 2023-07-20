import React, { useContext } from "react";
import { PokemonList, FilterBar } from "../../components/index";
import { TfiMenuAlt } from "react-icons/tfi";
import { PokemonContext } from "../../context/PokemonContext";
import "./HomePage.scss";

export const HomePage = () => {
  const { onClickLoadMore, active, setActive } = useContext(PokemonContext);
  return (
    <>
      <div className="container-filter container">
        <div className="icon-filter" onClick={() => setActive(!active)}>
          <TfiMenuAlt size={24} />
          <span>Filter</span>
        </div>
      </div>
      <PokemonList />
      <FilterBar />
      <div className="container-btn-load-more">
        <button className="btn-load-more" onClick={onClickLoadMore}>
          Load More...
        </button>
      </div>
    </>
  );
};
