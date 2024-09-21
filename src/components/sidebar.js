import React from "react";
import styled from "styled-components";
import { UseAppContext } from "../contexts/AppContext";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = UseAppContext();
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar__center side__open" : "sidebar__center"
        }>
        <ul className="sidebar__links">
          {navLinks.map((link) => {
            const { icon, text, id, url } = link;
            return (
              <li className="link" key={id} onClick={closeSidebar}>
                {icon}
                <Link to={url} className="url">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <button className="side-bar__close-btn btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: --sidebar-clr; */
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;

  .sidebar__center {
    position: fixed;
    top: 0;
    right: 0;
    /* background-color: inear-gradient(#000, #000108, #000439); */
    background-color: #000;
    height: 100dvh;
    width: 80%;
    /* opacity: 0.8; */
    transform: translate(100%);
    transition: var(--transition);
    z-index: 999;

    border: 1px solid white;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: 1px solid #d0bdf8;
  }

  .side__open {
    transform: translate(0);
    z-index: 999;
  }

  .url:hover {
    color: white;
  }
  .side-bar__close-btn {
    position: absolute;
    display: block;
    right: 3rem;
    top: 18px;
    background-color: transparent;
    color: var(--clr--primary-four);
    display: flex;
    align-items: center;
    color: white;
    font-family: "DM Sans";
    font-size: 14px;
    font-size: var(--sm-font-size);
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
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
    letter-spacing: 0.1rem;
    color: white;
    font-family: "DM Sans";
    font-size: 14px;
    /* font-size: var(--sm-font-size); */
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
  }

  .sidebar__links {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: var(--size--50);
    /* background-color: yellow; */
    align-items: flex-start;
    height: 100%;
    padding: 0 1rem;
    padding-top: 16px;
    /* border: 1px solid red; */
  }
  @media (width > 1100px) {
    .side-bar__center {
      transform: translate(-100%);
    }
  }
`;
export default Sidebar;
