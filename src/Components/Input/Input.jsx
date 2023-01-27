import React from "react";
import { forwardRef } from "react";
import styled from "styled-components";

export const Input = forwardRef(
  ({ id, labelName, inputType, value, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={id}>{labelName} </label>
        <StuledInput type={inputType} id={id} {...rest} ref={ref} />
      </>
    );
  }
);


const StuledInput=styled.input`
    width: 97%;
    border: 2px solid gray;
    height: 30px;
    border-radius: 8px;
    margin: 0.5rem 0;
    
`