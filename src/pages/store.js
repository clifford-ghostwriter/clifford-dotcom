import React, { useEffect, useState } from "react";
import { Loading } from "../components";
import styled from "styled-components";
import studiopix from "../assets/projects/studiopix.jpg";

const Store = () => {
  const [isloading, setloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  if (isloading) {
    return (
      <Wrapper className="section">
        <div className="section-center">
          <Loading />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section">
      <div className="section-center">
        <div>
          <img src={studiopix} alt="studiopicture" />
        </div>
        <p className="text">This page is under development</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border: 1px solid red;
  min-height: 50dvh;

  .text {
    font-weight: bolder;
    font-size: large;
    padding-block: 1rem;
  }
`;
export default Store;
