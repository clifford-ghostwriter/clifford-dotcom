import React from "react";
import styled from "styled-components";
import { UseAppContext } from "../contexts/AppContext";

const Experience = () => {
  // const [scrollHeight, setScrollHeight] = useState(0);
  const { scrollHeight } = UseAppContext();

  return (
    <Wrapper>
      <h2 className="heading">Experience</h2>
      <h3
        className={
          scrollHeight >= 800 ? "show_sub_heading sub_heading" : "sub_heading"
        }>
        Full Stack Developer- Freelance
      </h3>
      <p className={scrollHeight >= 820 ? " show_text text" : "text"}>
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
    transform: translate(100%);
    transition: var(--transition-two);
    visibility: hidden;
    /* display: none; */
  }

  .text {
    font-size: 14px;
    transform: translateY(100%);
    transition: var(--transition-two);
    visibility: hidden;
    /* display: none; */
  }

  .show_text {
    transform: translateY(0);
    visibility: visible;
    /* display: block; */
  }

  .show_sub_heading {
    transform: translate(0);
    visibility: visible;
    /* display: block; */
  }
`;
export default Experience;
