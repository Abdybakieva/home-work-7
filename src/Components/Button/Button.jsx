import styled from "styled-components";

export const Button = ({ color, text, onClick, ...rest }) => {
  return (
    <ButtonCss
      style={{ backgroundColor: `${color}` }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </ButtonCss>
  );
};

const ButtonCss = styled.button`
  border: none;
  width: 100px;
  height: 35px;
  border-radius: 10px;
`;
