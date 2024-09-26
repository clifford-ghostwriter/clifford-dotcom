import React from "react";
import { useParams } from "react-router-dom";
// import { UseAppContext } from "../contexts/AppContext";
import { projects } from "../utils/constants";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

import { PiTrafficSignLight } from "react-icons/pi";

const SingleProject = () => {
  const { id } = useParams();
  // const { projects } = UseAppContext();

  const project = projects[id];
  const { title, about, image, stack, url } = project;
  // console.log(project, id);

  // console.log(id);
  return (
    <Wrapper className="container mx-auto">
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
            <span>title:</span>
            {title}
          </h3>
          <p className="stack">
            <span>stack:</span>
            {stack}
          </p>
          <p className="about">
            <span>about:</span>
            {about}
          </p>
          <a className="site__link" href={url} target="_blank" rel="noreferrer">
            visit site <IoMdArrowRoundForward />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* padding-bottom: 2rem; */
  min-height: calc(100vh - (10.5rem + 60px));
  display: grid;
  align-items: center;
  justify-items: center;
  /* color: var(--clr--primary-three); */
  isolation: isolate;
  font-family: "DM Sans";
  /* border: 1px solid red; */

  .project__card {
    border: 1px solid rgba(110, 58, 0, 0.6);
    width: 300px;
    border-radius: 10px;
    /* background: #fff; */
    box-shadow: 0px 2px 2px 0px rgba(210, 210, 245, 0.6);
    padding: 16px;
  }
  .project__info {
    display: grid;
    gap: 1rem;
    /* padding-inline: 1.5rem; */
    padding-block: 1rem;
  }

  .project__info > * {
    display: grid;
  }

  .project__img {
    width: auto;
    /* height: 15rem; */
    position: relative;
    overflow: hidden;
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

  .project__link a {
    /* color: var(--clr--primary-four); */
    color: white;
  }

  .project__img {
    overflow: hidden;
    /* border: 1px solid red; */
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .project__img img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
  }

  .site__link {
    display: inline-flex;
    align-items: center;
    width: max-content;
    font-weight: 800;
  }

  span {
    /* color: red; */
    /* color: rgba(255, 0, 0, 0.5); */
    text-transform: capitalize;
  }

  .project__img:hover .project__link {
    display: grid;
    z-index: 999;
  }

  .stack,
  .details,
  .title,
  .about {
    text-transform: capitalize;
    font-size: 14px;
  }

  @media (width >= 900px) {
    .project__card {
      width: 400px;
      font-size: 20px;
    }

    .stack,
    .details,
    .title,
    .about {
      font-size: 18px;
    }
  }
`;
export default SingleProject;
