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
      <div className=" footer__center">
        <div className="line__container">
          <p className="line"></p>
          <p className="text">contact me</p>
          <p className="line"></p>
        </div>
        <address>
          <p className="address__item">
            <MdOutlineEmail /> <span>cliffizuchucks@gmail.com</span>
          </p>
          <p className="address__item">
            <FaPhone /> <span>+234 8064985287 </span>
          </p>
          <p className="address__item">
            <FaLocationDot /> <span>Remote</span>
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

    justify-items: center;
    /* border: 1px solid white; */
    width: max-content;
    margin: auto;
    gap: 1rem;
    /* padding-left: 1rem; */
  }

  .address__item {
    border: 1px solid white;
    border-radius: 5px;
    width: 15rem;
    text-align: center;
    align-items: center;
  }

  @media (min-width: 800px) {
    address {
      grid-template-areas:
        "area1 area1 area2 area2"
        ".area3 area3 .";
      /* width: 80%; */
    }

    address > *:nth-child(1) {
      grid-area: area1;
    }

    address > *:nth-child(2) {
      grid-area: area2;
    }

    address > *:nth-child(3) {
      grid-area: area3;
    }
  }
`;
export default Footer;
