import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import "./Favourite.css";

const Favourite = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getMovies = async () => {
      setLoading(false);
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=92f493cf"
      );
      if (componentMounted) {
        setLoading(false);
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted = false;
      };
    };
    getMovies();
  }, []);

  const Loading = () => {
    return (
      <>
        <div>Loading....</div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.Type === cat);
    setFilter(updatedList);
  };
  const ShowMoviess = () => {
    return (
      <>
        <div className="buttons">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("movie")}>Movies</button>
          <button>Series</button>
          <button>Music</button>
          <button>Game</button>
          <button>New</button>
        </div>
        {filter.map((film) => {
          return (
            <>
              <div>{film.Poster}</div>
              <div>{film.Type}</div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div>{loading ? <Loading /> : <ShowMoviess />}</div>
    </>
  );
};

export default Favourite;
