import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer, Navbar, Sidebar } from "../components";

const SharedLayout = () => {
  const [scroll, setscroll] = useState();
  const ref = useRef(null);
  // console.log(ref);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      // console.log(window.scrollY);

      setscroll(window.scrollY);
    });
  }, [scroll]);

  useEffect(() => {
    if (scroll >= 150) {
      ref.current.classList.add("stickyNav");
    } else {
      ref.current.classList.remove("stickyNav");
    }
  });
  return (
    <Wrapper>
      <Navbar ref={ref} />
      <Sidebar />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default SharedLayout;
