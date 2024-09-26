import React from "react";
import styled from "styled-components";
import { UseAppContext } from "../contexts/AppContext";

const Experience = () => {
  // const [scrollHeight, setScrollHeight] = useState(0);
  const { scrollHeight } = UseAppContext();

  return (
    <Wrapper>
      <h2 className="heading *:lg:text-[25px]">Experience</h2>
      <div className="experience">
        <h3
          className={
            scrollHeight >= 1000
              ? "show_sub_heading sub_heading *:lg:text-[20px]"
              : "sub_heading"
          }>
          Full Stack Developer- Freelance
        </h3>
        <p
          className={
            scrollHeight >= 820
              ? " show_text text lg:text-[30px] "
              : "text lg:text-[20px]"
          }>
          Over time, I have had opportunities of working on projects, both
          personal and collaborative project where I engineered and maintained a
          scalable e-commerce, start-up website with learning platform using
          Dotnet, C#, React.js, Javascript. I optimized database queries and
          enhanced overall system performance using technologies like Efcore,
          Node.js, Express.js and Mongoose, enabling robust API with seamless
          data storage and retrieval from MongoDb and SQL database, improving
          general user experience with Css frameworks such as Bootsrap and
          Tailwind, respectively.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "DM Sans";

  display: flex;
  flex-direction: column;
  text-align: left;
  /* display: none; */
  /* display: none; */
  /* border: 1px solid red; */

  .experience {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: 1px solid white; */
    width: 300px;
  }

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
    /* padding-block: 8px; */
    padding-left: 5px;
    width: max-content;
    font-weight: 300;
    /* visibility: hidden; */
    /* transform: translate(100%); */
    /* transition: var(--transition-two); */

    /* display: none; */
  }

  .text {
    font-size: 14px;
    /* visibility: hidden; */
    /* transform: translateY(100%); */
    /* transition: var(--transition-slow); */

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

  @media (width >= 900px) {
    /* border: 1px solid red; */
    width: 400px;

    .experience {
      /* border: 1px solid red; */
      width: 400px;
    }
  }

  @media (width >= 1100px) {
    /* border: 1px solid red; */
    width: 900px;

    /* padding: 16px; */

    .experience {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }

    .text {
      width: 500px;
      font-size: 18px;
    }
  }
`;
export default Experience;
