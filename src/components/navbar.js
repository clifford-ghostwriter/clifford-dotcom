// eslint-disable-next-line
import React, { useEffect, useState, forwardRef } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/AppContext";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
// import { MdOutlineNightlightRound } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";

const Navbar = forwardRef(function (_, ref) {
  // const [theme, setTheme] = useState("dark-theme");
  const { openSidebar, isSidebarOpen, toggletheme, isdarkthemeon } =
    UseAppContext();

  // const changetheme = function () {
  //   if (theme === "dark-theme") {
  //     setTheme("light-theme");
  //   } else {
  //     setTheme("dark-theme");
  //   }
  // };

  const rotateBtn = (e) => {
    // console.log(e.currentTarget);
    const target = e.currentTarget;
    target.classList.add("rotate");
    setTimeout(() => {
      target.classList.remove("rotate");
    }, 500);

    toggletheme();
    // changetheme();
  };

  // useEffect(() => {
  //   document.documentElement.className = theme;
  // }, [theme]);
  return (
    <Wrapper ref={ref}>
      <div className="nav__center section-center">
        <div className="nav__text">
          <Link to="/" className="icon">
            clifford
          </Link>
        </div>
        <div className="btn__container">
          <div className="theme_btn_container">
            <button className="theme__btn" onClick={(e) => rotateBtn(e)}>
              {isdarkthemeon ? <BsMoonFill /> : <MdOutlineLightMode />}
            </button>
            <p>{isdarkthemeon ? "dark theme " : "bright theme "}</p>
          </div>
          <div className="nav__btn__container">
            <button className="nav__btn" onClick={openSidebar}>
              {isSidebarOpen ? null : <FaBars />}
            </button>
          </div>
        </div>
        <ul className="nav__links">
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
});

const Wrapper = styled.div`
  background-color: black;
  height: 10rem;
  /* display: grid; */
  align-content: center;
  color: white;
  z-index: 999;
  border-bottom: 1px solid white;

  .theme_btn_container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
    font-size: small;
  }

  .icon {
    color: white;
    text-decoration: none;
  }

  .btn__container {
    display: grid;
    grid-template-columns: auto auto;
    align-content: center;
    /* border: 1px solid white; */
    gap: 1rem;
  }

  .nav__center {
    height: 5rem;
    background-color: rgba(255, 0, 0, 0.2);
    padding-block: 1rem;
    display: flex;
    /* display: grid; */
    /* grid-template-columns: auto auto auto; */
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    /* align-content: stretch; */
    border: none;
    box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
    /* border: 1px solid yellow; */
  }

  .nav__center > * {
    /* border: 1px solid yellow; */
  }

  .nav__btn__container {
    /* border: 1px solid yellow; */
    padding: var(--size--25);
    align-self: flex-end;
    display: grid;
    /* justify-content: flex-end; */
  }

  .nav__btn {
    display: grid;
    justify-content: flex-end;
    font-size: var(--size--100);
    align-content: center;
    width: max-content;
    /* border: 1px solid yellow; */
    cursor: pointer;
    border: none;
    justify-self: flex-end;
    /* color: white; */

    /* display: none; */
  }

  .theme__btn {
    display: grid;
    justify-content: flex-end;
    font-size: var(--size--100);
    align-content: center;
    width: max-content;
    /* border: 1px solid yellow; */
    cursor: pointer;
    border: none;
    background: transparent;
    /* margin-right: -10rem; */
    /* display: none; */
    color: white;
  }

  .nav__text {
    /* border: 1px solid yellow; */
    padding: var(--size--25);
    font-size: 1.2rem;
  }
  .nav__links {
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
    color: white;
    letter-spacing: 0.1rem;
  }

  .url:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  .theme__btn:hover {
    /* animation: spinner 0.5s ease-in-out 1; */
  }

  .rotate {
    animation: spinner 0.5s ease-in-out 1;
  }

  @media (width > 1100px) {
    .nav__btn {
      display: none;
    }
    .nav__links {
      display: flex;
    }
  }

  @media (width < 1000px) {
    .nav__links {
      margin-left: 3rem;
      /* border: 1px solid red; */
    }
  }
`;
export default Navbar;
