import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <Wrapper className="section">
      <div className="section-center footer__center">
        <div className="line__container">
          <p className="line"></p>
          <p className="text">contact me</p>
          <p className="line"></p>
        </div>
        <address>
          <p className="address__item">
            <MdOutlineEmail /> <span>cliffizuchcuks@gmail.com</span>
          </p>
          <p className="address__item">
            <FaPhone /> <span>+234 8064985287 </span>
          </p>
          <p className="address__item">
            <FaLocationDot /> <span>Nigeria</span>
          </p>
        </address>
        <div className="line__container">
          <p className="line"></p>
          <p className="socials">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaWhatsapp />
          </p>
          <p className="line"></p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr--primary-two);
  color: var(--clr--primary-four);
  padding-block: 1rem;

  .footer__center {
    /* border: 1px solid red; */
    display: grid;
    gap: 2rem;
  }

  .line__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .line {
    /* border: 1px solid red; */
    height: 0.25rem;
    background-color: red;
  }
  .text {
    text-align: center;
  }

  .socials {
    display: flex;
  }
  .socials > * {
    flex: 1;
  }

  address {
    display: grid;
    /* grid-template-columns: auto auto auto; */
    /* grid-template-rows: auto auto auto; */
    justify-items: center;
    /* border: 1px solid white; */
    width: max-content;
    margin: auto;
    gap: 1rem;
    /* padding-left: 1rem; */
  }

  .address__item {
    /* border: 1px solid white; */
    border-radius: 5px;
    width: 15rem;
    text-align: center;
    align-items: center;
  }

  .address__item:nth-child(1) {
    border: 1px solid white;
    /* grid-row: 1/2;
    grid-column: 1/ 2; */
  }
  .address__item:nth-child(2) {
    border: 1px solid white;
    /* grid-row: 1/2;
    grid-column: 2/ 3; */
  }
  .address__item:nth-child(3) {
    border: 1px solid white;
    /* grid-row: 2/3; */
    /* grid-column: 1/ 3; */
    /* align-self: center; */
  }
`;
export default Footer;
