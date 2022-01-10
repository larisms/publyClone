import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <Image>image</Image>
      <Article>article </Article>
      <div>bookmark</div>
      <div>title</div>
      <div>tag</div>
    </>
  );
};

const Image = styled.div`
  width: 300px;
  height: 156px;
  background-color: green;
`;

const Article = styled.p`
  font-size: 12px;
  color: #999999;
`;

export default Card;
