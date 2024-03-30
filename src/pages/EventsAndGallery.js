import React from "react";
import styled from "styled-components";
import { eventandgallery } from "../utils/constants";
import { Event } from "../components";

const EventsAndGallery = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="section__head">
          <h3 className="event__heading">events</h3>
          <p>
            over the years I have had opportunities to attend events, some are
            for fun, while others are educational. I like to dump some pictures
            from the events here to entertain you, if possible educate you.
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
  }
`;
export default EventsAndGallery;
