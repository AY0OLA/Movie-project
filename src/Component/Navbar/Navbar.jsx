import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Movies from "../Movies/Movies";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [action, setAction] = useState("search");

  const showNav = () => {
    setAction("search setSearch");
  };
  const removeNav = () => {
    setAction("search");
  };
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=92f493cf`;

    const response = await fetch(url);

    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="Navbar">
        <span>
          Movie<span className="red">Box</span>
        </span>

        <div className="means">
          <CiSearch className="icon" onClick={showNav} />
          <div className={action}>
            <FaTimes className="times" onClick={removeNav} />
            <Movies searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
      </div>
      <div className="film">
        {movies.map((movie) => {
          return (
            <div className="movies">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="container">
                <div className="title">{movie.Title}</div>
                <div className="type">{movie.Type}</div>
                <div className="year">{movie.Year}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
