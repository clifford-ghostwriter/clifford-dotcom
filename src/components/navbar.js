// eslint-disable-next-line
import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { UseAppContext } from "../contexts/AppContext";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
// import { MdOutlineNightlightRound } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";

const Navbar = () => {
  // const [theme, setTheme] = useState("dark-theme");

  const context = UseAppContext();
  const { toggletheme, isdarkthemeon, openSidebar, isSidebarOpen } = context;

  // console.log(context);

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
    <Wrapper>
      <div className="nav__center container mx-auto">
        <div className="nav__text">
          <Link to="/" className="icon">
            {" < clifford/>"}
          </Link>
        </div>
        <div className="btn__container">
          <div className="theme_btn_container">
            <button className="theme__btn" onClick={(e) => rotateBtn(e)}>
              {isdarkthemeon ? <BsMoonFill /> : <MdOutlineLightMode />}
            </button>
            <p className="theme__btn_text">
              {isdarkthemeon ? "dark theme " : "bright theme "}
            </p>
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
};

const Wrapper = styled.div`
  background-color: black;
  align-content: center;
  color: white;
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  /* box-shadow: -22.832px 4.151px 205.699px 0px rgba(12, 75, 246, 0.25); */
  /* background-color: rgba(255, 0, 0, 0.2); */
  /* background-color: var(--nav-bcg); */
  /* border: 1px solid red; */
  display: grid;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  /* z-index: 100; */
  /* background: #fff; */
  display: flex;
  height: 60px;
  /* padding: 12px 18px 11px 18px; */
  justify-content: center;
  align-items: center;
  box-shadow: -22.832px 4.151px 205.699px 0px rgba(12, 75, 246, 0.25);
  font-family: "DM Sans";

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
    /* text-align: left; */
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 2px;
    color: #f15022;
  }

  .btn__container {
    display: flex;

    align-content: center;
    gap: 32px;
  }

  .nav__center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    border: none;
    width: 80%;
    height: 60px;
  }

  .nav__center > * {
    /* border: 1px solid yellow; */
  }

  .nav__btn__container {
    padding: var(--size--25);
    align-self: flex-end;
    display: grid;
  }

  .nav__btn {
    display: grid;
    justify-content: flex-end;
    font-size: 14px;
    align-content: center;
    width: max-content;
    cursor: pointer;
    border: none;
    justify-self: flex-end;
  }

  .theme__btn {
    display: grid;
    justify-content: flex-end;
    align-content: center;
    width: max-content;
    cursor: pointer;
    border: none;
    background: transparent;
    color: white;
    font-size: 14px;
  }

  .theme__btn_text {
    letter-spacing: 2px;
  }

  .nav__text {
    padding: var(--size--25);
    font-size: 1.2rem;
  }
  .nav__links {
    gap: 2rem;
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
    font-family: "DM Sans";
    font-size: 14px;
    font-style: normal;
    letter-spacing: 2px;
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

  @media (width >= 1100px) {
    .nav__btn {
      display: none;
    }
    .nav__links {
      display: flex;
      gap: 1rem;
    }

    .icon,
    .theme__btn_text,
    .url {
      font-size: 20px;
    }
    .icon {
      letter-spacing: 5px;
    }
  }
`;
export default Navbar;
