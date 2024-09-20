import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Wrapper>
      <h2 className="heading">Experience</h2>
      <h3 className="sub_heading"> Full Stack Developer- Freelance</h3>
      <p className="text">
        Over time, I have had opportunities of working on projects, both
        personal and collaborative project where I engineered and maintained a
        scalable e-commerce, start-up website with learning platform using
        Dotnet-C# React.js, Javascript. I optimized database queries and
        enhanced overall system performance using technologies like Efcore,
        Node.js, Express.js and Mongoose, enabling robust API with seamless data
        storage and retrieval from a MongoDb and SQL database, improving general
        user experience with Css frameworks such as Bootsrap and Tailwind,
        respectively.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "DM Sans";
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: left;
  /* display: none; */

  .heading {
    border-left: 5px solid rgba(255, 0, 0, 0.2);
    padding-block: 8px;
    padding-left: 5px;
    width: max-content;
    font-size: 30px;
    font-weight: 400;
  }

  .sub_heading {
    font-size: 20px;
    /* border: 1px solid red; */
    padding: 0;
    /* border-left: 5px solid rgba(255, 0, 0, 0.2); */
    padding-block: 8px;
    padding-left: 5px;
    width: max-content;
    font-weight: 300;
  }

  .text {
    font-size: 14ps;
  }
`;
export default Experience;
