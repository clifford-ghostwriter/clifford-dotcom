import React from "react";
import { useParams } from "react-router-dom";
// import { UseAppContext } from "../contexts/AppContext";
import { projects } from "../utils/constants";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import { PiTrafficSignLight } from "react-icons/pi";

const SingleProject = () => {
  const { id } = useParams();
  // const { projects } = UseAppContext();

  const project = projects[id];
  const { title, about, image, stack } = project;
  // console.log(project, id);

  console.log(id);
  return (
    <Wrapper className="section">
      <div className="project__card section-center">
        <div className="project__img">
          <img src={image} alt="project" />
          <div className="project__link">
            <a
              href="https://waka-info.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <PiTrafficSignLight />
            </a>
          </div>
        </div>
        <div className="project__info">
          <h3>
            <span>title:</span>
            {title}
          </h3>
          <p>
            <span>stack:</span>
            {stack}
          </p>
          <p>
            <span>about:</span>
            {about}
          </p>
          <a
            href="https://waka-info.netlify.app/"
            target="_blank"
            rel="noreferrer">
            visit site
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 2rem;
  /* height: 70dvh; */
  /* box-shadow: 2px 2px 3px black; */
  /* background-color: black; */
  /* height: 15rem; */
  color: white;
  isolation: isolate;

  .project__card {
    width: 60%;
  }

  .singleproject__link {
    color: red;
    /* border: 1px solid red; */
    display: inline;
  }

  .project__info > * {
    /* display: flex; */
    gap: 1rem;
  }

  .project__img {
    width: auto;
    height: 15rem;
    position: relative;
    overflow: hidden;
    /* border: 1px solid red; */
  }

  .project__link {
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    font-size: 5rem;
    display: none;
    justify-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    /* border: 3px solid blue; */
    opacity: 0.8;
  }

  .project__img img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
    /* border: 1px solid blue; */
  }

  app {
    color: white;
    /* border: 1px solid white; */
    display: grid;
    justify-items: center;
    align-content: center;
    border-radius: 222vw;
    /* width: 80%; */
    /* height: 80%; */
    text-decoration: none;
    text-transform: capitalize;
    /* overflow: hidden; */
  }

  .project__img:hover .project__link {
    display: grid;
    z-index: 999;
  }
`;
export default SingleProject;
