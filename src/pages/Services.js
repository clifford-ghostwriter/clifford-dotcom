import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper className="section">
      <div className="section-center service__center">
        contact me for more details
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80dvh;

  .service__center {
    display: grid;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
    height: 100%;
    font-style: italic;
  }
`;
export default Services;
