import { createRef, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "./Modal";
import styled from "styled-components";

export const AddMovies = ({ pushMoviesObject, addMovieHandler }) => {
  const [cancelModal, setCancelModal] = useState(false);
  const movieInput = createRef();
  const imgUrlInput = createRef();
  const ratingInput = createRef();

  const CancelModalHandler = () => {
    setCancelModal((prevState) => !prevState);
  };

  const inputValue = (e) => {
    e.preventDefault();

    const name = movieInput.current.value;
    const url = imgUrlInput.current.value;
    const rating = ratingInput.current.value;

    if (name && url && rating) {
      const objectMovies = {
        name,
        url,
        rating,
        id: Math.random(),
      };
      pushMoviesObject(objectMovies);

      addMovieHandler(false);
    }
  };
  return (
    <>
      {!cancelModal ? (
        <Modal onClose={CancelModalHandler}>
          <Input labelName="Movie Title" inputType={"text"} ref={movieInput} />
          <Input labelName="imgURL" inputType={"url"} ref={imgUrlInput} />
          <Input
            labelName="MovieRating  "
            inputType={"number"}
            ref={ratingInput}
          />
          <ContanerBtn>
            <Button
              text="Cancel"
              onClick={CancelModalHandler}
              color="rgb(175,198,248)"
            />
            <Button onClick={inputValue} text="Add" color="blue" />
          </ContanerBtn>
        </Modal>
      ) : null}
    </>
  );
};

const ContanerBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-right: 0.7rem;
  margin-top: 1rem;
`