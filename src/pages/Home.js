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
            gaered towards making the world a better place through Tech.
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
                <span>Html5, Css3, Javascript, React and Nodejs</span>
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
                  When I am not writing code, I make music, check out my
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
  padding-bottom: 2rem;

  .bio__center {
    /* border: 2px solid blue; */
    /* height: 30rem; */
    display: grid;
    width: 100%;
    color: white;
    padding-top: 2rem;

    /* grid-template-rows: auto; */
    /* grid-template-rows: auto 1fr; */
    /* grid-template-columns: 1fr 1fr; */
    overflow: hidden;
    /* margin-inline: 15rem; */
    /* background-color: white; */
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
    height: 35rem;
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
    /* object-position: right 29%; */

    transition: var(--transition-two);
  }

  .store {
    display: inline-block;
    padding-left: 0.2rem;
  }

  /* .image__container:hover .image__two {
    z-index: 999;
    opacity: 0.8;
  } */

  .about__me {
    display: grid;
    gap: 1rem;
    padding-block: var(--size--50);
    /* border: 1px solid black; */
    justify-items: flex-start;
  }

  .about__me {
    text-transform: capitalize;
  }

  .info__title {
    color: var(--clr--primary-three);
  }

  span {
    text-transform: capitalize;
    text-align: left;
  }

  .about__me a {
    text-decoration: none;
    /* color: red; */
  }

  .about__me__text {
    display: grid;
    /* justify-items: left; */
    text-transform: initial;
    /* grid-template-columns: auto auto; */
    gap: 0.3rem;
    /* border: 1px solid red; */
  }

  .projects__center {
    padding-top: 4rem;
    display: grid;
    gap: 1rem;
    border: 1px solid blue;
  }

  .projects {
    display: grid;
    gap: 4rem;
    margin: auto;
    justify-items: center;
    /* width: 80%; */
    border: 1px solid blue;
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

  @media (min-width: 600px) {
    .bio__image {
      object-fit: cover;
      object-position: center;
      /* border: 1px solid red; */
      height: 100%;
      width: 100%;
    }

    /* .bio__center {
      width: 80%;
      margin: auto;
    } */
    .image__container {
      height: 50rem;
      border: 1px solid red;
    }

    .bio {
      width: 80%;
      margin: auto;
      border: 1px solid red;
    }
  }

  @media (min-width: 1000px) {
    .bio__center {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      /* border: 1px solid red; */
      /* width: 70%; */
      margin: auto;
    }

    .bio__image {
      object-fit: cover;
      /* object-position: right 29%; */
    }

    .bio {
      width: 80%;
      margin: auto;
    }
  }

  @media (min-width: 800px) {
    .projects {
      grid-template-areas:
        "area1 area1 area2 area2"
        ".area3 area3 .";
      width: 80%;
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
