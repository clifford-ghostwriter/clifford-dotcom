import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/AppContext";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, isSidebarOpen } = UseAppContext();
  return (
    <Wrapper>
      <div className="nav__center section-center">
        <div className="nav__text">
          <p>clifford.com</p>
        </div>
        <div className="nav__btn__container">
          <button className="nav__btn" onClick={openSidebar}>
            {isSidebarOpen ? null : <FaBars />}
          </button>
        </div>
        <ul className="sidebar__links">
          {navLinks.map((link) => {
            const { icon, text, id, url } = link;
            return (
              <li className="link" key={id}>
                {icon}
                <Link to={url} className="url">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  height: 10rem;
  /* display: grid; */
  align-content: center;
  color: white;

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
    border: none;
    /* display: none; */
  }

  .nav__text {
    /* border: 1px solid yellow; */
    padding: var(--size--25);
  }
  .sidebar__links {
    gap: 2rem;
    /* border: 1px solid white; */
    padding-right: 1rem;
    display: none;
  }

  li {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 0.25rem;
    margin-left: 0;
    color: white;
    list-style: none;
  }

  .url {
    list-style: none;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--clr--primary-four);
    letter-spacing: 0.1rem;
  }

  @media (width > 1100px) {
    .nav__btn {
      display: none;
    }
    .sidebar__links {
      display: flex;
    }
  }

  @media (width < 1000px) {
    .sidebar__links {
      margin-left: 3rem;
      /* border: 1px solid red; */
    }
  }
`;
export default Navbar;
