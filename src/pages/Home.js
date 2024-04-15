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
            aimed at making the world a better place through Tech.
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
                <span className="info__title">Name:</span>{" "}
                <span>Clifford Izuchukwu</span>
              </p>
              <p className="about__me__text">
                <span className="info__title">role:</span>{" "}
                <span>Front End Developer</span>
              </p>
              <p className="about__me__text">
                <span className="info__title">stack: </span>
                <span>
                  <span className="node">Node.js</span>, React, Javascript,
                  Html5 and Css3
                </span>
              </p>
              <p className="about__me__text">
                <span className="info__title">github:</span>
                <a
                  href="https://github.com/clifford-ghostwriter"
                  target="_blank"
                  rel="noreferrer">
                  clifford-ghostwriter
                </a>
              </p>
              <p className="about__me__text">
                <span className="info__title">location: </span>{" "}
                <span>Remote</span>
              </p>

              <p className="about__me__text">
                <span className="info__title">skills: </span>{" "}
                <span>
                  <span className="node">
                    When I am not writing code, I make music. check out my
                  </span>
                  <Link to="/store" className="store">
                    online beat store
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-center">
        <div className="projects__center">
          <h2 className="project__heading">portfolio projects</h2>
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
  /* border: 1px solid yellow; */
  padding-bottom: 2rem;
  /* overflow-x: hidden; */

  .node {
    text-transform: none;
  }

  .bio {
    /* border: 1px solid red; */
  }
  .bio__center {
    /* border: 2px solid blue; */
    display: grid;
    width: 100%;
    color: var(--clr--primary-three);
    padding-top: 2rem;
    overflow: hidden;
  }
  .heading {
    border-left: 5px solid red;
    margin: auto;
    width: max-content;
    padding-left: 0.5rem;

    padding-block: 0.5rem;
  }
  .image__container {
    position: relative;
    width: 100%;
    height: 100%;
    height: 35rem;
  }

  .overlay {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
  }
  .bio__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 100%;
  }

  .store {
    display: inline-block;
    padding-left: 0.2rem;
  }

  .about__me {
    display: grid;
    gap: 1rem;
    padding-block: var(--size--50);
    justify-items: flex-start;
    text-transform: capitalize;
  }

  .info__title {
    color: red;
  }

  span {
    text-transform: capitalize;
    text-align: left;
  }

  .about__me a {
    text-decoration: none;
  }

  .about__me__text {
    display: grid;
    text-transform: initial;
    gap: 0.3rem;
  }

  .projects__center {
    padding-top: 4rem;
    display: grid;
    gap: 1rem;
    /* border: 1px solid red; */
  }

  a {
    /* color: var(--clr--primary-four); */
    /* color: rgba(0, 0, 255, 0.5); */
    /* color: white; */
    text-decoration: underline !important;
  }

  a:hover {
    /* color: rgba(255, 255, 255, 0.5); */
  }

  .projects {
    display: grid;
    gap: 4rem;
    margin: auto;
    justify-items: center;
  }

  .projects__center h2 {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
    padding-bottom: -2rem;
    width: max-content;
    text-transform: capitalize;
  }

  .bio p {
    text-align: center;
  }

  @media (min-width: 450px) {
    .bio__image {
      object-fit: cover;
      object-position: center 100%;
    }

    .image__container {
      height: 37rem;
    }

    .bio {
      width: 80%;
      margin: auto;
    }
  }

  @media (min-width: 600px) {
    .bio__image {
      object-fit: cover;
      object-position: center 90%;
    }

    .image__container {
      height: 45rem;
    }

    .bio {
      width: 80%;
      margin: auto;
    }
  }

  @media (min-width: 750px) {
    .bio__image {
      object-fit: cover;
      object-position: center 100%;
    }

    .image__container {
      height: 40rem;
    }

    .bio {
      width: 70%;
      margin: auto;
    }

    .projects {
      width: 80%;
    }
  }

  @media (min-width: 930px) {
    .bio__center {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .about__me__text {
      text-transform: initial;
      align-content: flex-start;
    }

    .bio__image {
      object-fit: cover;
    }

    .bio {
      width: 90%;
      margin: auto;
    }

    .projects {
      width: 75%;
    }

    .about__me {
      padding-block: 0;
    }
  }

  @media (min-width: 800px) {
    .projects {
      grid-template-areas:
        "area1 area1 area2 area2"
        ".area3 area3 .";
    }

    .image__container {
      height: 45rem;
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

  @media (min-width: 900px) {
    .image__container {
      height: 45rem;
    }
  }

  @media (min-width: 1200px) {
    .image__container {
      height: 40rem;
    }
  }
  @media (min-width: 1400px) {
    .bio__center {
      grid-template-columns: 1fr 1fr;
    }

    .image__container {
      height: 38rem;
    }

    .bio__image {
      object-fit: cover;
    }

    .bio {
      width: 80%;
      margin: auto;
    }

    .projects {
      width: 75%;
    }
  }

  @media (min-width: 1700px) {
    .bio__center {
      grid-template-columns: 1fr 1fr;
      width: 70%;
      margin: auto;
    }

    .image__container {
      height: 41rem;
    }

    .bio__image {
      object-fit: cover;
      object-position: center 100%;
      height: 100%;
    }

    .projects {
      width: 75%;
    }

    .about__me {
    }
  }
`;
export default Home;
