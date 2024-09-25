import React, { useState } from "react";
import styled from "styled-components";

const Services = () => {
  const [details, SetDetails] = useState({
    name: null,
    email: null,
    message: null,
  });

  const { name, email, message } = details;
  const disabled = !(name && email && message);

  // const list = ["ui/ux", "social media management", "web dev", "app dev"];

  const setStateValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // console.log(name, value);

    SetDetails({ ...details, [name]: value });
    // console.log(details);
  };
  return (
    <Wrapper className="container mx-auto">
      <div className="service__center">
        <form action="" className="form">
          <div className="form_group">
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" onChange={setStateValue} />
          </div>
          <div className="form_group">
            <label htmlFor="name">email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={setStateValue}
            />
          </div>
          <div className="form_group">
            <label htmlFor="message">tell us what you need</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={setStateValue}></textarea>
          </div>
          <input
            type="submit"
            value="submit"
            className={disabled ? "submit_btn" : "active submit_btn "}
            disabled={disabled}
          />
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
    border: 1px solid rgba(110, 58, 0, 0.2);
    background-color: rgba(50, 58, 78, 0.4);
    background-color: var(--form--bcg);

    box-shadow: 0px 2px 5px 0px rgba(210, 210, 245, 0.6);
  }

  .form_group {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
  }

  label {
    text-transform: capitalize;
    /* font-weight: 600; */
    letter-spacing: 2px;
    color: #fff;
  }
  input,
  textarea {
    border-radius: 5px;
    background-color: var(--clr--primary-two);
    color: var(--clr--primary-one);
    padding: 6px;
  }
  .submit_btn {
    /* font-weight: 600; */
    cursor: not-allowed;
    color: var(--clr--primary-one);
    text-transform: capitalize;
    letter-spacing: 3px;
  }

  .active {
    background-color: #000439;
    cursor: pointer;
    color: #fff;
  }
  input {
    height: 30px;
  }

  @media (width >= 900px) {
    .form {
      width: 400px;
    }

    label,
    .submit_btn {
      font-weight: 600;
    }
  }
`;
export default Services;
