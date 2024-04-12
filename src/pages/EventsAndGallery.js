import React from "react";
import styled from "styled-components";
import { eventandgallery } from "../utils/constants";
import { Event } from "../components";

const EventsAndGallery = () => {
  return (
    <Wrapper className="section">
      <div className="section-center event__center">
        <div className="section__head">
          <h3 className="event__heading">events</h3>
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

  .event__heading {
    border-left: 5px solid red;
    margin: auto;
    width: 8rem;
    padding-left: 0.5rem;
    text-transform: capitalize;
  }

  .section__head p {
    text-align: center;
    padding-block: 2rem;
    margin: auto;
  }

  .events {
    display: grid;
    gap: 2rem;
    /* border: 1px solid red; */
  }
  @media (min-width: 800px) {
    .event__center {
      /* width: 30%; */
      margin: auto;
    }

    .section__head p {
      text-align: center;
      padding-block: 2rem;
      width: 70%;
    }
  }
`;
export default EventsAndGallery;
