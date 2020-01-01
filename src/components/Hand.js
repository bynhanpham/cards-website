import React, { useState } from "react";
import Card from "./Card";
import "./../styles/Hand.css";
import { GiPlayButton } from "react-icons/gi";

export default function Hand({ values, show, cardActions }) {
  const [selected, setSelected] = useState([]);

  const updateSelected = (val, add) => {
    if (add) {
      setSelected(state => [...state, val]);
    } else {
      function removeFromArr(arr) {
        let idx = arr.indexOf(val);
        let copy = [...arr];
        copy.splice(idx, 1);
        return copy;
      }
      setSelected(state => removeFromArr(state));
    }
  };

  const playCards = () => {
    cardActions.playCards(selected);
    setSelected([]);
  };

  let mid = Math.ceil(values.length / 2);
  let buttonShift =
    window.innerWidth <= 667 && values.length >= 10
      ? (values.length - mid) *
          (Math.floor(window.innerWidth * 0.8) / values.length) +
        10
      : (values.length - mid) * 45 + 10;
  return (
    <div>
      {values.map((value, idx) => {
        let x =
          window.innerWidth <= 667 && values.length >= 10
            ? (idx - mid) *
                (Math.floor(window.innerWidth * 0.8) / values.length) +
              10
            : (idx - mid) * 45 + 10;
        return (
          <Card
            key={"card" + idx + "_" + value}
            value={value}
            onClick={updateSelected}
            style={{
              position: "absolute",
              bottom: "0px",
              transform: `translate(${x}px, 0px)`
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          transform: `translate(${buttonShift}px, 10px)`
        }}
      >
        {/* {!!values.length && (
          <>
            <GiPlayButton size="1.65em" onClick={playCards} />
          </>
        )} */}
      </div>
    </div>
  );
}

export function CondensedHand({ values, horizontal, flip }) {
  if (horizontal) {
    let mid = Math.ceil(values.length / 2);
    return (
      <div>
        {values.map((value, idx) => {
          let x = (idx - mid) * 30;
          return (
            <div
              className="ccard0"
              style={{
                position: "absolute",
                transform: `translate(${x}px, -50%)`
              }}
              key={`ccard_${(value * 151) / 7}`}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div style={{ position: "relative" }}>
        {values.map((value, idx) => {
          let rot = 50 + idx * (80 / values.length) + (flip ? 180 : 0);
          let rightDist = flip ? { left: "50%" } : { right: "50%" };
          return (
            <div
              className="ccard0"
              style={{
                position: "absolute",
                transform: `translateY(-120px) rotate(${rot}deg)`,
                transformOrigin: "50% 110%",
                ...rightDist
              }}
              key={`ccard_${(value * 151) / 7}`}
            />
          );
        })}
      </div>
    );
  }
}
