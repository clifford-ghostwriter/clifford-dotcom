import React from "react";
// import cliffordOne from "../assets/cliffordone.jpg";
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
          <p className="bio__text">
            I am a result oriented Front End Developer with the ability to learn
            and solve problems. I am open to opportunities and collaborations
            gaered toward making the world a better place through Tech.
          </p>
          <div className="bio__center">
            <div className="image__container">
              {/* <img
                className="bio__image image__one"
                src={cliffordOne}
                alt="clifford"
              /> */}
              <img
                className="bio__image image__two"
                src={cliffordTwo}
                alt="clifford"
              />
              {/* <div className="overlay"></div> */}
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
                <span>skills: </span>when i am not writing code, i make music,
                <Link to="/store"> check out my online beat store</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-center">
        <div className="projects__center">
          <h2>projects</h2>
          <div className="projects">
            {projects.map((project, index) => {
              return <Projects project={project} key={index} index={index} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding-top: var(--size--200); */

  /* border: 1px solid yellow; */

  .bio__center {
    border: 2px solid blue;
    height: 30rem;
    display: grid;

    /* grid-template-rows: auto; */
    /* grid-template-rows: auto 1fr; */
    /* grid-template-columns: 1fr 1fr; */
    overflow: hidden;
    margin-inline: 15rem;
    background-color: white;
  }
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
    height: 100%;
    height: 30rem;
    border: 1px solid red;
    /* object-fit: contain; */
    /* object-position: center; */
    /* aspect-ratio: 1; */
  }

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    /* opacity: 0.6; */
  }
  .bio__image {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    display: block;
    /* aspect-ratio: 1; */

    object-fit: cover;
    object-position: right 29%;

    transition: var(--transition-two);
  }

  /* .image__container:hover .image__two {
    z-index: 999;
    opacity: 0.8;
  } */

  .about__me {
    /* display: grid; */
    /* gap: 1rem; */
    /* padding-block: var(--size--300); */
    border: 1px solid black;
    justify-items: flex-start;
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
    justify-items: flex-start;
    /* grid-template-columns: auto auto; */
    /* gap: 0.3rem; */
    /* border: 1px solid red; */
  }

  .projects__center {
    padding-top: 4rem;
    display: grid;
    gap: 1rem;
  }

  .projects {
    display: grid;
    gap: 4rem;
    margin: auto;
    justify-items: center;
    /* width: 80%; */
  }

  .projects__center h2 {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
    padding-bottom: -2rem;
  }

  .bio p {
    text-align: center;
    /* padding-block: 2rem; */
  }

  @media (min-width: 1200px) {
    .projects {
      grid-template-areas:
        "area1 area1 area2 area2"
        ".area3 area3 .";
      width: 70%;
    }

    .projects > *:nth-child(1) {
      grid-area: area1;
    }

    .projects > *:nth-child(2) {
      grid-area: area2;
    }

    .projects > *:nth-child(3) {
      grid-area: area3;
    }
  }
`;
export default Home;
