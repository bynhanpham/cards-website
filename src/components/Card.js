import React, { useState } from "react";
import "./../styles/Card.css";
import { GiSpades, GiClover, GiDiamonds, GiHearts } from "react-icons/gi";

export default function Card({ value, onClick, style }) {
  const [selected, setSelect] = useState(false);

  function decideSuite(value) {
    let suite = Math.round((value - Math.floor(value)) * 10);
    switch (suite) {
      case 0:
        return (
          <div className="blackSuite">
            <GiSpades size="1.5em" />
          </div>
        );
      case 3:
        return (
          <div className="blackSuite">
            <GiClover size="1.5em" />
          </div>
        );
      case 6:
        return (
          <div className="redSuite">
            <GiDiamonds size="1.5em" />
          </div>
        );
      case 9:
        return (
          <div className="redSuite">
            <GiHearts size="1.5em" />
          </div>
        );
      default:
    }
  }

  function toggleCard(e) {
    onClick(value, !selected);
    setSelect(state => !state);
  }
  if (style.transform && selected)
    style.transform = style.transform + "translateY(-20px)";
  return (
    <div
      className={"card " + (selected ? "cardSelected" : "")}
      onClick={toggleCard}
      style={style}
    >
      <div className="value">
        <font size="5">{CARDMAP[Math.floor(value)]}</font>
      </div>
      {decideSuite(value)}
    </div>
  );
}

const CARDMAP = {
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "J",
  12: "Q",
  13: "K",
  14: "A",
  15: "2"
};
