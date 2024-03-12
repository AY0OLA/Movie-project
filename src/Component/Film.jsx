import React from "react";

const Film = (props) => {
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div>
            <img src={movie.Poster} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default Film;
