import react from "react";
import "./Movies.css";

const Movies = (props) => {
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        value={props.value}
        onChange={(event) => {
          props.setSearchValue(event.target.value);
        }}
      />
    </>
  );
};

export default Movies;
