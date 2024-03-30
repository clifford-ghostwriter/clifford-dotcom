import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/AppContext";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlightRound } from "react-icons/md";

const Navbar = () => {
  const { openSidebar, isSidebarOpen, toggletheme, isdarkthemeon } =
    UseAppContext();
  return (
    <Wrapper>
      <div className="nav__center section-center">
        <div className="nav__text">
          <p>clifford.com</p>
        </div>
        <div className="theme_btn_container">
          <button className="theme__btn" onClick={toggletheme}>
            {isdarkthemeon ? (
              <MdOutlineNightlightRound />
            ) : (
              <MdOutlineLightMode />
            )}
          </button>
          <p>{isdarkthemeon ? "dark theme" : "bright theme"}</p>
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

  .theme_btn_container {
    display: flex;
    align-items: center;
    gap: 0.02rem;
    text-transform: capitalize;
    font-size: small;
  }

  .nav__center {
    height: 5rem;
    background-color: red;
    padding-block: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    /* align-content: stretch; */
    border: none;
    box-shadow: var(--box-shadow);
    border: 1px solid yellow;
  }

  .nav__center > * {
    /* border: 1px solid yellow; */
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

  .theme__btn {
    display: grid;
    justify-content: flex-end;
    font-size: var(--size--200);
    align-content: center;
    width: max-content;
    /* border: 1px solid yellow; */
    cursor: pointer;
    border: none;
    background: transparent;
    /* margin-right: -10rem; */
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
