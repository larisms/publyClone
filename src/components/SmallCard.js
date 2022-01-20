import React from "react";
import styled from "styled-components";

const SmallCard = () => {
  return (
    <Wrap>
      <Image>image</Image>
      <Article>article </Article>
      <div>bookmark</div>
      <div>title</div>
      <div>tag</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  width: 116px;
  height: 60px;
  background-color: green;
`;

const Article = styled.p`
  font-size: 12px;
  color: #999999;
`;

export default SmallCard;
