import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <span className="home__span secondary heading5">
          SO, YOU WANT TO TRAVEL TO
        </span>
        <h1 className="home__title heading1">SPACE</h1>
        <p className="home__paragraph secondary bodytext">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="home__action">
        <button className="home__button">
          <p className="home__buttontext">EXPLORE</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
