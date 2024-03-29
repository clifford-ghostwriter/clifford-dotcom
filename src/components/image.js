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
      className={type}></Wrapper>
  );
};
const Wrapper = styled.div`
  transition: var(--transition-slow);

  background-image: url(${(p) => p.$image});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: border-box;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* transform: translateX(${(p) => p.$index * 100}%); */
  /* transform: translateX(); */
  position: absolute;
  top: 0;
  left: 0;

  transition: var(--transition-slow);

  /* img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  } */
`;
export default Image;
