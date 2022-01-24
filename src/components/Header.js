import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrap>
      <div>PUBLY</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  height: 64px;
  background-color: gray;
`;

export default Header;
