import React from "react";
import styled from "styled-components";

import SmallCard from "./SmallCard";

const SmallCardList = () => {
  return (
    <>
      <List>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  width: 900px;
`;

export default SmallCardList;
