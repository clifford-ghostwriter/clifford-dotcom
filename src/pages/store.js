import React, { useEffect, useState } from "react";
import { Loading } from "../components";
import styled from "styled-components";

const Store = () => {
  const [isloading, setloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });

  if (isloading) {
    return (
      <Wrapper className="section">
        <div className="section-center">
          <Loading />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section">
      <div className="section-center">
        <div>Store</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  border: 1px solid red;
  min-height: 50dvh;
`;
export default Store;
