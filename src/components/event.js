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
  border: 3px solid yellow;
  padding-block: 2rem;

  /* width: 50vw; */
  /* margin: auto; */

  .event__images {
    /* display: flex; */
    height: 30rem;
    /* border: 1px solid red; */
    overflow-x: hidden;
    /* width: 100%; */
    position: relative;
  }

  .event-center {
    /* border: 1px solid yellow; */
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
    /* border: 1px solid blue; */
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.2rem;
  }
  .small-btn {
    color: black;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 500vw;
    /* background-color: transparent; */
    border: 1px solid white;
    box-shadow: 2px 2px 3px black;
    cursor: pointer;
  }

  .active-btn {
    background-color: var(--clr--primary-six);
  }

  .btn__container {
    /* display: inline-flex; */
    /* justify-content: space-between; */
    /* border: 1px solid red; */
    /* padding-inline: var(--size--100); */
    position: absolute;
    top: 50%;
    /* left: 5%; */
    width: 100%;

    margin: auto;
  }
  .btn__center {
    display: flex;
    justify-content: space-between;
    /* border: 1px solid red; */
    /* padding-inline: var(--size--100); */
    /* position: absolute; */
    /* top: 50%; */
    /* left: 5%; */
    width: 90%;

    margin: auto;
  }

  .prev-btn,
  .next-btn {
    font-size: var(--fs-700);
    background-color: transparent;
    /* border: 1px solid red; */
    color: var(--clr--primary-two);
  }

  @media (min-width: 800px) {
    .bio__center {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      /* border: 1px solid red; */
      /* width: 70%; */
      margin: auto;
    }

    .bio__image {
      object-fit: contain;
      object-position: right 29%;
    }

    .event__center {
      width: 50%;
      margin: auto;
    }
  }
`;
export default Event;
