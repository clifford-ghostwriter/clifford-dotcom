import React from "react";
import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { MdOutlineLocationSearching } from "react-icons/md";
import { PiTrafficSignLight } from "react-icons/pi";

const Projects = ({ project }) => {
  const { title, about, image, stack } = project;
  return (
    <Wrapper>
      <div className="project__card">
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
            <span>title: </span> {title}
          </h3>
          <p>
            <span>stack: </span>
            {stack}
          </p>
          <p>
            <span>about: </span>
            {about}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  /* height: 15rem; */
  color: white;

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

  a {
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
export default Projects;