import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper className="container mx-auto">
      <div className="service__center">
        <form action="" className="form">
          <div className="form_group">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form_group">
            <label htmlFor="name">email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form_group">
            <label htmlFor="description">tell us what you need</label>
            <textarea name="description" id="description" rows="5"></textarea>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70vh;
  min-height: calc(100vh - (10.5rem + 60px));
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-family: "DM Sans";
  font-size: 14px;

  .service__center {
    display: grid;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    font-style: italic;

    margin: auto;
    padding: 1rem;
  }
  .form {
    /* width: 100%; */
    border: 1px solid red;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 5px;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
  }

  label {
    text-transform: capitalize;
  }
  input,
  textarea {
    border-radius: 5px;
    background-color: var(--clr--primary-two);
    color: var(--clr--primary-one);
  }

  input {
    height: 30px;
  }

  @media (width >= 900px) {
    .form {
      width: 400px;
    }
  }
`;
export default Services;
