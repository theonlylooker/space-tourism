import React from "react";
import { DestinationProps } from "../types/type";
import images from "../images/images";
import { useNav } from "../hooks/useNav";
const Destination = ({ data }: DestinationProps) => {
  //const places: string[] = ["MOON", "MARS", "EUROPA", "TITAN"];
  const places = data.map((element) =>
    element.name.replace(/\s+/g, "").toUpperCase()
  );
  const [nav, handleNav] = useNav();
  return (
    <div className="destination">
      <div className="destination__headertext heading5">
        <p className="destination__numeration">01</p>
        <h4 className="destination__title">PICK YOUR DESTINATION</h4>
      </div>
      <figure className="destination__figure">
        <img
          className="destination__image"
          src={images[places[nav]]}
          alt="planet"
        />
      </figure>
      <nav className="destinationnav">
        <ul className="destinationnav__list">
          {places.map((place, index) => (
            <li
              onClick={() => handleNav(index)}
              className="destinationnav__item navtext secondary"
              key={index}
            >
              {place}
            </li>
          ))}
        </ul>
      </nav>
      <div className="destination__bodytext">
        <h2 className="destination__name ternary heading2">{data[nav].name}</h2>
        <p className="destination__description bodytext secondary">
          {data[nav].description}
        </p>
        <hr className="destination__separation" />

        <div className="destination__distancetitle subheading2">
          AVG. DISTANCE
        </div>
        <div className="destination__distance subheading1 ternary">
          {data[nav].distance}
        </div>
        <div className="destination__traveltimetitle subheading2">
          EST. TRAVEL TIME
        </div>
        <div className="destination__traveltime subheading1 ternary">
          {data[nav].travel}
        </div>
      </div>
    </div>
  );
};

export default Destination;
