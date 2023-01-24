import { createRef, useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "./Modal";

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
          <Button
            text="Cancel"
            onClick={CancelModalHandler}
            color="rgb(175,198,248)"
          />
          <Button onClick={inputValue} text="Add" color="blue" />
        </Modal>
      ) : null}
    </>
  );
};
