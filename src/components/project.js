import React from "react";
import styled from "styled-components";
// import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { MdOutlineLocationSearching } from "react-icons/md";
import { PiTrafficSignLight } from "react-icons/pi";

const Project = ({ project, index }) => {
  const { title, about, image, stack, url } = project;
  // console.log(about.slice(0, 100), index);
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
          <h3 className="title">
            <span>title: </span>
            {title}
          </h3>
          <p className="stack">
            <span>stack: </span>
            {stack}
          </p>
          <p className="details">
            <span>about: </span>
            {about.substring(0, 143)}... <br />
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
  isolation: isolate;
  font-family: "DM Sans";
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid rgba(110, 58, 0, 0.6);
  border-radius: 15px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 2px 0px rgba(210, 210, 245, 0.6);
  padding: 16px;

  .project__card {
    /* border: 1px solid red; */
  }

  .singleproject__link {
    /* color: rgba(255, 0, 0, 0.7); */
    display: inline;
    width: max-content;
    font-weight: 800;
    /* border: 1px solid red; */
    color: var(--clr--primary-two);
  }

  /* .singleproject__link:hover {
    color: rgba(255, 0, 0, 0.5);
  } */

  .project__info {
    display: grid;
    gap: 1rem;
    padding-block: 1rem;
    /* padding-inline: 1.5rem; */
  }

  .project__info > * {
    display: grid;
  }

  .project__img {
    width: 100%;
    height: 15rem;
    position: relative;
    overflow: hidden;
    /* border: 1px solid red; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .stack,
  .details,
  .title {
    text-transform: capitalize;
    font-size: 14px;
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
    opacity: 0.8;
  }

  .project__img img {
    /* object-fit: contain; */
    /* object-position: center; */
    /* display: block; */
    width: 100%;
    height: 100%;
  }

  a {
    /* color: var(--clr--primary-four); */
    color: white;
    display: grid;
    justify-items: center;
    align-content: center;
    border-radius: 222vw;
    text-decoration: none !important;
    text-transform: capitalize;
  }

  .project__img:hover .project__link {
    display: grid;
    z-index: 999;
  }
  span {
    text-transform: capitalize;
  }

  @media (width >= 900px) {
    width: 400px;
  }
  @media (width >= 110px) {
    .stack,
    .details,
    .title {
      font-size: 16px;
    }
  }
`;
export default Project;
