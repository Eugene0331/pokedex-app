import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { ImCancelCircle } from "react-icons/im";
import "./FilterBar.scss";

export const FilterBar = () => {
  const { active, setActive, handleCheckbox } = useContext(PokemonContext);
  const types = [
    "grass",
    "fire",
    "bug",
    "fairy",
    "dragon",
    "shadow",
    "ground",
    "normal",
    "psychic",
    "steel",
    "dark",
    "electric",
    "fighting",
    "flying",
    "ice",
    "poison",
    "rock",
    "water",
  ];
  return (
    <div className={`container-filters-bar ${active ? "active" : ""}`}>
      <ImCancelCircle
        className="icon-filter-hide-btn"
        size={24}
        onClick={() => setActive(!active)}
      />
      <div className="filter-by-type">
        <span>Type</span>
        {types.map((type, index) => (
          <div className="group-type" key={type}>
            <input type="checkbox" onChange={handleCheckbox} name={type} />
            <label htmlFor={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
