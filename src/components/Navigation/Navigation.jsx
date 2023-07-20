import React, { useContext } from "react";
import Logo from "../../assets/img/pngwing.com (1).png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { PokemonContext } from "../../context/PokemonContext";
import "./Navigation.scss";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search pokemon here ..."
            />
          </div>
          <button className="btn-search">
            <BsSearch size={20} />
          </button>
        </form>
      </header>
      <Outlet />
    </>
  );
};
