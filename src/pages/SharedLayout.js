import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default SharedLayout;
