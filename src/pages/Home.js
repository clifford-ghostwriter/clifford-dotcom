import React, { useEffect } from "react";
// import cliffordOne from "../assets/cliffordone.jpg";
// import cliffordTwo from "../assets/cliffordtwo.jpg";
import clifford from "../assets/iclifford.jpg";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Technology, Experience, Projects } from "../components";
// import { projects } from "../utils/constants";

const Home = () => {
  useEffect(() => {});

  return (
    <Wrapper className="mx-auto container gap-y-4  ">
      <div className="bio_section flex-col flex text-center gap-5 min-w-full justify-between md:min-w-[80%] lg:min-w-[70%] xlg:min-w-[60%] ">
        <div className="bio_header">
          <h3 className="heading mx-auto text-left">bio</h3>
          <div className="bio_text mx-auto *:lg:text-[20px]">
            <p>
              I am a result oriented Software Developer with the ability to
              learn and solve problems. I am open to opportunities and
              collaborations aimed at making the world a better place through
              Tech.
            </p>
            <p>
              I am a Full Stack Developer with knowledge of
              object-oriented-programming(OOP), leveraging programming
              languages, frameworks and database managemanet tools like, Dotnet,
              C#, React, Javascript, Node.js, Express.js, SQL, Mongodb
            </p>
          </div>
        </div>
        <div className="bio_image_container hover:translate-x-px hover:translate-y-px transition-all ">
          <img
            className="mx-auto bio_image lg:min-w-[400px] lg:min-h-[400px]"
            src={clifford}
            alt="clifford"
          />
        </div>
      </div>
      <Technology />
      <Experience />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid white;

  --sm-font-size: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding-block: 1rem;

  .bio_section {
    /* border: 1px solid red; */
    padding: 2rem;
  }
  .heading {
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-left: 5px solid rgba(255, 0, 0, 0.2);
    padding-block: 8px;
    padding-left: 5px;
    width: max-content;
    width: 300px;
  }

  .bio_text {
    text-align: left;
    font-family: "DM Sans";
    /* font-size: 14px; */
    font-size: var(--sm-font-size);
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */

    font-family: "DM Sans";
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .bio_image {
    width: 60%;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  @media (width >= 900px) {
    .bio_section {
      flex-direction: row;
      /* width: 700px; */
      /* gap: 2rem; */
      border: 1px solid red;
    }
  }
`;
export default Home;
