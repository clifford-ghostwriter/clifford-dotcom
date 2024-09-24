import React from "react";
import styled from "styled-components";
import { techLogo } from "../utils/constants";

const Technology = () => {
  return (
    <Wrapper>
      <h3 className="heading">Technology</h3>
      <div className="technologies">
        {techLogo.map((logo, index) => {
          // const animate = index % 2 === 0 ? "animation_one" : "animation_two";
          const animate = [0, 3, 7, 6, 9, 11, 12].includes(index)
            ? "animation_one"
            : "animation_two";

          // console.log(animate);
          return (
            <div className="outer_box relative" key={index}>
              <div className={` ${animate} image_container absolute `}>
                <img src={logo} alt="logo" className="logo" />
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .technologies {
    /* border: 1px solid red; */
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }
  .logo {
    width: 75px;
    height: 75px;
  }

  .outer_box {
    /* border: 1px solid red; */
    padding: 1rem;
    /* position: relative; */
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image_container {
    border: 1px solid rgba(110, 58, 0, 0.6);
    padding: 1rem;
    border-radius: 10px;
    /* position: absolute; */
    /* top: 10%; */
    /* left: 0; */
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition-slow);

    /* display: none; */
  }

  .animation_one {
    animation: logoOne 3s linear infinite;
  }

  .animation_two {
    animation: logoTwo 3s linear infinite;
  }

  @media (width >= 900px) {
    /* border: 1px solid red; */

    .technologies {
      border: 1px solid red;
      width: 700px;
    }
  }

  @media (width >= 1100px) {
    .technologies {
      flex-direction: row;
      /* width: 800px; */
      /* gap: 2rem; */
      /* border: 1px solid red; */
      width: 900px;
      /* padding: 16px; */
    }
  }
`;
export default Technology;
