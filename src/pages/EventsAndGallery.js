import React from "react";
import styled from "styled-components";
import { eventandgallery } from "../utils/constants";
import { Event } from "../components";

const EventsAndGallery = () => {
  return (
    <Wrapper className="mx-auto container">
      <div className=" event__center">
        <div className="section__head">
          <h3 className="heading">events</h3>
          <p className="text">
            I have had opportunities to attend events, some were for fun, while
            others were educational. I like to dump pictures from some of the
            events here to entertain you, and if possible educate you.
          </p>
        </div>
        <div className="events">
          {eventandgallery.map((event, index) => {
            return <Event event={event} index={index} key={index} />;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 3px solid white; */
  padding-bottom: 2rem;
  font-family: "DM Sans";
  width: 350px;
  display: flex;
  flex-direction: column;
  text-align: left;

  .heading {
    text-transform: capitalize;
    border-left: 5px solid rgba(255, 0, 0, 0.2);
    padding-block: 8px;
    padding-left: 5px;
    width: max-content;
    font-size: 30px;
    font-weight: 400;
  }

  .text {
    font-size: 14px;
    text-align: left;
    /* width: 300px; */
  }

  .section__head p {
    /* text-align: center; */
    /* padding-block: 2rem; */
    /* margin: auto; */
  }

  .events {
    display: grid;
    gap: 2rem;
    padding-block: 1rem;
    /* border: 1px solid red; */
  }
  @media (min-width: 800px) {
    .event__center {
      /* width: 30%; */
      /* margin: auto; */
    }

    .section__head p {
      /* text-align: center; */
      /* padding-block: 2rem; */
      /* width: 70%; */
    }
  }
`;
export default EventsAndGallery;
