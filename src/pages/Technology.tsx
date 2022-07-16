import React from "react";
import { useNav } from "../hooks/useNav";
import images from "../images/images";
import { technologyProps } from "../types/type";

const Technology = ({ data }: technologyProps) => {
  const vehicles = data.map((element) =>
    element.name.replace(/\s+/g, "").toUpperCase()
  );
  const [nav, handleNav] = useNav();
  return (
    <div className="technology">
      <div className="heading5">
        <span className="technology__numeration">03</span>
        <h4 className="technology__title"> SPACE LAUNCH 101</h4>
      </div>
      <figure className="technology__figure">
        <img
          className="technology__image"
          src={images[vehicles[nav]]}
          alt="vehicle"
        />
      </figure>
      <nav className="technologynav">
        <ul className="technologynav__list">
          {vehicles.map((element, index) => (
            <li className="technology__item" onClick={() => handleNav(index)}>
              <div className="dotcontent">
                <span className="dotcontent__text">{index + 1}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="bodytext">
        <p className="navtext secondary"> THE TERMINOLOGY...</p>
        <h2 className="heading3">{data[nav].name}</h2>
        <p className="bodytext secondary">{data[nav].description}</p>
      </div>
    </div>
  );
};

export default Technology;