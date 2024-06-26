import React from "react";
import styled from "styled-components";

const Image = ({ image, index, type }) => {
  console.log(index, image);
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
  /* overflow: hidden; */
  transition: var(--transition-slow);
  padding-block: 2rem;
  width: max-content;
  /* background-image: url(${(p) => p.$image}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  background-origin: border-box;
  /* width: 100%; */
  height: 100%;
  opacity: 0;
  /* transform: translateX(${(p) => p.$index * 100}%); */
  /* transform: translateX(); */
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50%;

  transition: var(--transition-slow);
  /* border: 1px solid blue; */
  /* width: 100%; */

  img {
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 50%;
    box-shadow: 2px 2px 3px var(--shadow-clr);
  }

  @media (min-width: 800px) {
    margin: auto;

    img {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  @media (min-width: 1200px) {
    img {
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
`;
export default Image;
