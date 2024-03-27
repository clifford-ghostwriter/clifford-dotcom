import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/AppContext";

const Navbar = () => {
  const { openSidebar } = UseAppContext();
  return (
    <Wrapper>
      <div className="nav__center section-center">
        <div className="nav__text">
          <p>clifford.com</p>
        </div>
        <div className="nav__btn__container">
          <button className="nav__btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 10rem;
  /* display: grid; */
  align-content: center;

  .nav__center {
    height: 5rem;
    background-color: red;
    padding-block: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-content: stretch;
    border: none;
    box-shadow: var(--box-shadow);
  }

  .nav__btn__container {
    /* border: 1px solid yellow; */
    padding: var(--size--25);
  }

  .nav__btn {
    display: grid;
    justify-content: flex-end;
    font-size: var(--size--100);
    align-content: center;
    width: max-content;
    border: 1px solid yellow;
    cursor: pointer;
    border: 1px solid white;
  }

  .nav__text {
    /* border: 1px solid yellow; */
    padding: var(--size--25);
  }
`;
export default Navbar;
