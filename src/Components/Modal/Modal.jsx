// import { Input } from "../Input/Input";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClick={onClose} />
          <Card>{children}</Card>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Card = styled.div`
  background-color: white;
  padding: 30px;
  min-width: 300px;
  min-height: 200px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
`;
