//library
import React from "react";

// styles
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => props.width || "800px"};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid gray;
  background-color: gray;
  color: white;

  &::-webkit-input-placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export const Input = (props) => {
  return (
    <div>
      <StyledInput type="text" placeholder={props.placeholder} {...props} />
    </div>
  );
};
