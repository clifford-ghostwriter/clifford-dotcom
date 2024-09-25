import React from "react";
import styled from "styled-components";

const Image = ({ image, index, type }) => {
  // console.log(index, image);
  return (
    <Wrapper
      // $index={index}
      // className={type}
      $image={image}
      $index={index}
      className={type}>
      <img src={image} alt="" />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  transition: var(--transition-slow);
  height: 100%;
  width: 100%;
  position: absolute;

  /* box-shadow: 0px 2px 15px 0px rgba(210, 210, 245, 0.6); */
  /* border: 1px solid blue; */

  img {
    /* border: 1px solid red; */
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 800px) {
    margin: auto;

    img {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* object-position: center center; */
    }
  }

  @media (min-width: 1200px) {
    img {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      /* object-fit: contain; */
      /* object-position: center center; */
    }
  }
`;
export default Image;
