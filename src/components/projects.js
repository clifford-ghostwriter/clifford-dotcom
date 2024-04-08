import React from "react";
import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { MdOutlineLocationSearching } from "react-icons/md";
import { PiTrafficSignLight } from "react-icons/pi";

const Projects = ({ project, index }) => {
  const { title, about, image, stack, url } = project;
  console.log(about.slice(0, 100), index);
  return (
    <Wrapper>
      <div className="project__card">
        <div className="project__img">
          <img src={image} alt="project" />
          <div className="project__link">
            <a href={url} target="_blank" rel="noreferrer">
              <PiTrafficSignLight />
            </a>
          </div>
        </div>
        <div className="project__info">
          <h3>
            <span>title: </span>
            {title}
          </h3>
          <p>
            <span>stack: </span>
            {stack}
          </p>
          <p>
            <span>about: </span>
            {about.substring(0, 150)} <br />
            <Link to={`/products/${index}`} className="singleproject__link">
              see more...
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 2px 2px 3px black;
  background-color: black;
  /* height: 15rem; */
  color: white;
  isolation: isolate;

  .singleproject__link {
    color: red;
    /* border: 1px solid red; */
    display: inline;
  }

  .project__info {
    display: grid;
    gap: 1rem;
    padding-block: 1rem;
  }

  .project__info > * {
    /* display: flex; */
    /* gap: 0.5rem; */
    display: grid;
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
  span {
    color: var(--clr--primary-three);
  }
`;
export default Projects;
