import React from "react";
import cliffordOne from "../assets/cliffordone.jpg";
import cliffordTwo from "../assets/cliffordtwo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Projects } from "../components";
import { projects } from "../utils/constants";

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
            <div className="about__me">
              <p className="about__me__text">
                <span>Name: </span>
                clifford Izuchukwu
              </p>
              <p className="about__me__text">
                <span>location: </span>
                Earth
              </p>
              <p className="about__me__text">
                <span>role: </span> front end Developer
              </p>
              <p className="about__me__text">
                <span>stack: </span> html5, css3, javascript, react and nodejs
              </p>
              <p className="about__me__text">
                <span>github: </span>
                <a
                  href="https://github.com/clifford-ghostwriter"
                  target="_blank"
                  rel="noreferrer">
                  clifford-ghostwriter
                </a>
              </p>
              <p className="about__me__text">
                <span>skill: </span>when i am not writing code, i make music,
                <Link to="/store"> check out my online beat store</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-center">
        <div className="projects__center">
          <h2>projects</h2>
          {projects.map((project, index) => {
            return <Projects project={project} key={index} />;
          })}
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
    width: max-content;
    padding-left: 0.5rem;
    /* border: 1px solid black; */
    padding-block: 0.5rem;
  }
  .image__container {
    position: relative;
    width: 100%;
    height: 30rem;
    /* border: 1px solid red; */
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

  .about__me {
    display: grid;
    gap: 1rem;
    padding-block: var(--size--300);
  }

  .about__me {
    text-transform: capitalize;
  }

  .about__me span {
    color: var(--clr--primary-three);
  }

  .about__me a {
    text-decoration: none;
    /* color: red; */
  }

  .about__me__text {
    display: grid;
    /* grid-template-columns: auto 1fr; */
    gap: 0.3rem;
  }

  .projects__center {
    display: grid;
    gap: 2rem;
  }
`;
export default Home;
