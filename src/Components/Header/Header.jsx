import { Button } from "../Button/Button";
import styled from "styled-components";
import { useState } from "react";
import { AddMovies } from "../Modal/AddMovies";

const HeaderCss = styled.div`
  background-color: #073698;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 1rem;
`;
const HeaderP = styled.p`
  color: white;
`;
export const Header = ({ pushMoviesObject }) => {
  const [AddMovie, setAddMovie] = useState(false);

  const AddMovieHandler = () => {
    setAddMovie((prevState) => !prevState);
  };

  return (
    <>
      {AddMovie ? (
        <AddMovies
          addMovieHandler={AddMovieHandler}
          pushMoviesObject={pushMoviesObject}
          onCancel={AddMovieHandler}
        />
      ) : null}

      <HeaderCss>
        <HeaderP>Favorite Movies</HeaderP>
        <Button text="Add Movie" onClick={AddMovieHandler} color="orange" />
      </HeaderCss>
    </>
  );
};
