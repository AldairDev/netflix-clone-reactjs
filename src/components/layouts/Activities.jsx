import React from "react";
import styled from "styled-components";
import tv from "../../assets/images/tv.png";

const Activities = () => {
  return (
    <Div>
      <div className="card-animation">
        <div className="card-text">
          <h1>Disfruta en tu TV.</h1>
          <h2>
            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
            reproductores de Blu-ray y más.
          </h2>
        </div>
        <div className="video-animation">
          <img src={tv} alt="tv" height="360px" />
          <video autoPlay muted loop>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  height: 350px;
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 45px;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  h2 {
    margin: 0;
    font-size: 1.6rem;
    /* font-weight: normal; */
  }
  .card-text {
    margin: 0 10px;
  }
  .video-animation {
    margin: 0 10px;
    position: relative;
  }

  .video-animation video {
    left: 0;
    z-index: -1;
    position: absolute;
  }
  .card-animation {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    max-width: 1100px;
    padding-bottom: 40px;
  }
`;
export { Activities };
