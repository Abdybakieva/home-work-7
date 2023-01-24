import { Button } from "../Button/Button";
import styled from "styled-components";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

const  Content = ({ url, name, rating, deleteItem, movie, movies }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const DeleteModalHandler = (e) => {
    setDeleteModal((prevState) => !prevState);
  };
  const DeleteItem = () => {
    const filteredmovie = movies.filter((item) => movie.id !== item.id);
    deleteItem(filteredmovie);
  };
  return (
    <>
      {deleteModal ? (
        <Modal onClose={DeleteModalHandler}>
          <h3>Are you sure you wanna delete?</h3>
          <Button text="No" onClick={DeleteModalHandler} />
          <Button text="Yes" onClick={DeleteItem} color="rgb(0,50,158)" />
        </Modal>
      ) : null}
      <Container>
        
        <Wrapper>
          <Img src={url} />
          <MainButton>
            <>
              <h3>{name}</h3>
            </>
            <ReatinnBtn>
              <ReatingP>{rating}</ReatingP>
              <Button
                onClick={DeleteModalHandler}
                text="Delete"
                color="blue "
              />
            </ReatinnBtn>
          </MainButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default Content;

const Container = styled.div`
  margin: 0 auto;
  width: 700px;
  border-radius: 15px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 200px;
  height: 150px;
  border-radius: 10px;
`;
const MainButton = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReatinnBtn = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;
  align-items: center;
`;
const ReatingP = styled.div`
  background-color: orange;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 5vh;
  width: 6vw;
  border-radius: 30px;
`;
