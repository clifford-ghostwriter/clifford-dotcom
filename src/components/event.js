import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image } from "../components";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Event = ({ event }) => {
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line

  const { text, images } = event;
  // eslint-disable-next-line
  const [slidesData, setSlides] = useState(images);

  useEffect(() => {
    const lastIndex = slidesData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slidesData]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [index]);

  const setIndexBtn = function (index) {
    setIndex(index);
  };

  const increment = function () {
    setIndex((initialvalue) => {
      let newvalue;
      newvalue = initialvalue + 1;
      if (newvalue > slidesData.length - 1) {
        newvalue = 0;
      }
      return newvalue;
    });
  };

  const decrement = function () {
    setIndex((initialvalue) => {
      let newvalue;
      newvalue = initialvalue - 1;
      if (newvalue < 0) {
        newvalue = slidesData.length - 1;
      }
      return newvalue;
    });
  };
  return (
    <Wrapper>
      <div className="event-center">
        <p className="event__text">{text}</p>
        <div className="event__images">
          {images.map((image, slideIndex) => {
            console.log(typeof image);
            let position;
            if (slideIndex === index) {
              position = "active";
            }
            if (slideIndex < index) {
              position = "previous";
            }

            if (slideIndex > index) {
              position = "next";
            }
            return (
              <Image
                image={image}
                index={slideIndex}
                key={slideIndex}
                type={position}
              />
            );
          })}
        </div>

        <div className="small__btn-container">
          {slidesData.map((_, btnIndex) => {
            return (
              <button
                key={btnIndex}
                className={
                  btnIndex === index ? "small-btn active-btn" : "small-btn"
                }
                onClick={() => {
                  setIndexBtn(btnIndex);
                }}></button>
            );
          })}
        </div>

        <div className="btn__container">
          <div className="btn__center">
            <button className="btn prev-btn" onClick={decrement}>
              <FaChevronLeft />
            </button>
            <button className="btn next-btn" onClick={increment}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 3px solid yellow; */
  /* padding-block: 2rem; */
  width: 95%;
  margin: auto;

  .event__images {
    height: 35rem;
    overflow-x: hidden;
    position: relative;
    width: 75%;
    margin: auto;
  }

  .event-center {
    position: relative;
  }
  .image {
    /* width: 100%; */
    /* height: 100%; */
  }

  .previous {
    transform: translateX(-100%);
  }

  .active {
    transform: translateX(0);
    opacity: 1;
  }

  .next {
    transform: translateX(100%);
  }

  .small__btn-container {
    position: absolute;
    bottom: 0.9rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.2rem;
    /* padding-block: 1rem; */
    /* border: 1px solid red; */
  }
  .small-btn {
    color: black;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 500vw;
    border: 1px solid white;
    box-shadow: 2px 2px 3px black;
    cursor: pointer;
    /* border: 1px solid red; */
  }

  .active-btn {
    background-color: red;
  }

  .btn__container {
    position: absolute;
    top: 50%;
    /* left: 5%; */
    width: 100%;

    margin: auto;
  }
  .btn__center {
    display: flex;
    justify-content: space-between;
    width: 90%;

    margin: auto;
  }

  .prev-btn,
  .next-btn {
    font-size: var(--fs-700);
    background-color: transparent;
    color: var(--clr--primary-two);
  }

  @media (min-width: 800px) {
    width: 50%;
    margin: auto;

    .event__images {
      height: 40rem;
    }
    .event__center {
      /* width: 50%; */
      margin: auto;
    }
  }

  @media (min-width: 1200px) {
    width: 45%;
    margin: auto;

    .event__images {
      height: 37rem;
    }
    .event__center {
      /* width: 50%; */
      margin: auto;
    }
  }
`;
export default Event;
