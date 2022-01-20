import React from "react";
import styled from "styled-components";

import Card from "./Card";

const CardList = () => {
  return (
    <>
      <List>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </List>
    </>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default CardList;
