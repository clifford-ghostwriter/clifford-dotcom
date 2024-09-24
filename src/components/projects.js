import React from "react";
import styled from "styled-components";
import { Project } from "./index";
import { projects } from "../utils/constants";

const Projects = () => {
  return (
    <Wrapper className="contaibber mx-auto">
      <div className="projects">
        {projects.map((project, index) => {
          return <Project project={project} key={index} index={index} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .projects {
    /* width: 300px; */
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    padding: 16px;
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
