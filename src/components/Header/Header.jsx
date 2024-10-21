// library
import React from "react";

// components
import { Menu } from "./Menu";
import { Navigation } from "./Navigation";

// styles
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #292929;
  padding: 5px 0 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
      <Navigation />
    </StyledHeader>
  );
};
