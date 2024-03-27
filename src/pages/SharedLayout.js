import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Sidebar } from "../components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default SharedLayout;
