import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .loading {
    width: 3rem;
    height: 3rem;
    margin: auto;
    /* margin-top: 10rem; */
    border-radius: 50%;
    border: 5px solid var(--clr--primary-three);
    border-top-color: red;
    animation: spinner 0.6s linear infinite;
  }
`;
export default Loading;
