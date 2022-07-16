import React from "react";
import { crewProps } from "../types/type";
import images from "../images/images";
import { useNav } from "../hooks/useNav";
const Crew = ({ data }: crewProps) => {
  //const crewMembers: string[] = ["MOON", "MARS", "EUROPA", "TITAN"];
  const members = data.map((element) =>
    element.name.replace(/\s+/g, "").toUpperCase()
  );
  const [nav, handleNav] = useNav();
  return (
    <div className="crew">
      <div>
        <div className="crew__headertext heading5">
          <span className="crew__numeration">02</span>
          <span className="crew__title">MEET YOUR CREW</span>
        </div>
      </div>
      <figure className="crew__figure">
        <img
          className="crew__image"
          src={images[members[nav]]}
          alt="crew member"
        />
      </figure>
      <hr className="crew__line" />
      <nav className="crewnav">
        <ul className="crewnav__list">
          {members.map((element, index) => (
            <li className="crewnav__item" onClick={() => handleNav(index)}>
              <div className="dot"></div>
            </li>
          ))}
        </ul>
      </nav>
      <h3 className="heading4">{data[nav].role}</h3>
      <h2 className="heading3">{data[nav].name}</h2>
      <p className="bodytext secondary">{data[nav].bio}</p>
    </div>
  );
};

export default Crew;
