import React from "react";
import cliffordOne from "../assets/cliffordone.jpg";
import cliffordTwo from "../assets/cliffordtwo.jpg";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="bio">
          <h3 className="heading">bio</h3>
          <div className="bio__center">
            <div className="image__container">
              <img
                className="bio__image image__one"
                src={cliffordOne}
                alt="clifford"
              />
              <img
                className="bio__image image__two"
                src={cliffordTwo}
                alt="clifford"
              />
            </div>
            <div className="about__me"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding-top: var(--size--200); */
  .heading {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
  }
  .image__container {
    position: relative;
    width: 100%;
    border: 1px solid red;
    /* object-fit: contain; */
    /* object-position: center; */
    aspect-ratio: 1;
  }
  .bio__image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    /* aspect-ratio: 1; */

    transition: var(--transition-two);
  }

  .image__container:hover .image__two {
    z-index: 999;
    opacity: 0.8;
  }
`;
export default Home;
