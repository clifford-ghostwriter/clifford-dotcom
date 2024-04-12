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
      <div className="section-center store-center">
        <div className="studio__img">
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
  min-height: 70vh;

  .studio__img {
    width: 90%;
    margin: auto;
  }

  .text {
    font-weight: bolder;
    font-size: large;
    padding-block: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: var(--box-shadow-two);
  }

  .store-center {
    display: grid;
  }

  @media (min-width: 1000px) {
    .studio__img {
      border: 1px solid black;
      /* width: 80%; */
      margin: auto;
      height: 40rem;
    }
  }
`;
export default Store;
