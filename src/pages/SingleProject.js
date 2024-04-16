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
          <h3 className="info">
            <span>title:</span>
            {title}
          </h3>
          <p className="info">
            <span>stack:</span>
            {stack}
          </p>
          <p className="info">
            <span>about:</span>
            {about}
          </p>
          <a
            className="site__link"
            href="https://waka-info.netlify.app/"
            target="_blank"
            rel="noreferrer">
            visit site <IoMdArrowRoundForward />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 2rem;
  /* height: 60vh; */
  display: grid;
  align-items: center;
  justify-content: center;
  /* color: var(--clr--primary-three); */
  isolation: isolate;

  .project__info {
    display: grid;
    gap: 1rem;
    padding-inline: 2rem;
    padding-block: 1rem;
  }

  .project__info > * {
    display: grid;
  }

  .project__img {
    width: auto;
    height: 15rem;
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

  .project__img img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
  }

  .site__link {
    color: red;
    display: inline-flex;
    align-items: center;
    width: max-content;
  }

  .site__link:hover {
    color: rgba(255, 0, 0, 0.7);
  }

  span {
    /* color: red; */
    color: rgba(255, 0, 0, 0.7);
    text-transform: capitalize;
  }

  .project__img:hover .project__link {
    display: grid;
    z-index: 999;
  }

  @media (min-width: 550px) {
    .project__card {
      width: 90%;
    }

    .project__img img {
      object-fit: cover;
      object-position: center 45%;
    }
  }

  @media (min-width: 800px) {
    .project__card {
      width: 80%;
    }

    .project__img img {
      object-fit: cover;
      object-position: center 45%;
    }
  }

  @media (min-width: 900px) {
    .project__card {
      width: 70%;
    }
  }

  @media (min-width: 1200px) {
    .project__card {
      width: 50%;
    }
  }
`;
export default SingleProject;
