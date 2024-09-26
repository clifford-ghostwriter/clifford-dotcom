import React from "react";
import styled from "styled-components";
import { Project } from "./index";
import { projects } from "../utils/constants";

const Projects = () => {
  return (
    <Wrapper className="contaibber mx-auto">
      <h3 className="heading">Projects</h3>
      <div className="projects">
        {projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .projects {
    /* width: 300px; */
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    padding: 16px;
  }
  .heading {
    border-left: 5px solid rgba(255, 0, 0, 0.2);
    padding-block: 8px;
    padding-left: 5px;
    width: max-content;
    font-size: 25px;
    font-weight: 400;
    font-family: "DM Sans";
  }

  @media (width >= 1100px) {
    /* border: 1px solid red; */
    .projects {
      flex-direction: row;
      flex-wrap: wrap;
      width: 900px;
    }
  }
`;
export default Projects;
