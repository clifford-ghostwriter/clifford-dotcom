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
            <a
              href="https://www.facebook.com/CliffIzuchucks?mibextid=JRoKGi"
              target="_blank"
              rel="noreferrer">
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/clifford_izu"
              target="_blank"
              rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https:linkedin.com/in/clifford-izuchukwu-33027415b"
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/2348064985287"
              target="_blank"
              rel="noreferrer">
              <FaWhatsapp />
            </a>
          </p>
          <p className="line"></p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: white;
  padding-block: 1rem;
  /* border: 2px solid white; */

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
    font-size: 1.5rem;
    font-style: italic !important;
  }

  .socials {
    display: flex;
    padding-inline: 2rem;
    font-size: 1.3rem;
    color: white;
    color: var(--clr--primary-four);
    gap: 1rem;
  }
  .socials > * {
    flex: 1;
    align-self: center;
    /* border: 1px solid white; */
    display: grid;
    align-items: center;
    justify-items: center;
    color: white;
    /* color: white; */
    /* color: var(--clr--primary-four); */
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
    display: flex;
    justify-content: center;
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

    .socials {
      font-size: 1.8rem;
    }
  }
`;
export default Footer;
