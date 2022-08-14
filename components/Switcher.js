import React from "react";
import moment from "moment";
import styles from "../styles/Home.module.scss";
import Player from "./Player";

let background;
export let round;


export default function Switcher({ num }) {
  const [time, setTime] = React.useState(moment().format("hh:mm:ss"));
  const [date, setDate] = React.useState(moment().format("MM/DD/YYYY"));
  // const [background, setBackground] = React.useState("white");
	// const [switchRound, setSwitchRound] = React.useState(0);

  const timeInterval = 1000;
  const switchInterval = num * 60000;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment().format("hh:mm:ss a"));
      setDate(moment().format("MM/DD/YYYY"));
    }, timeInterval);
    return () => clearInterval(interval);
  }, []);

  // every time x amount of time passes change the state of background
  React.useEffect(() => {
    const interval = setInterval(() => {
			if (background === "white") {
				background = "black";
				round = 1;
			}	else {
				background = "white";
				round = 0;
			}
    }, switchInterval);
    return () => clearInterval(interval);
  }, [background]);

  const stylesSwitcher = (color) => {
    if (color === "white") {
      return styles.switcherWhite;
    } else {
      return styles.switcherBlack;
    }
  };

  return (
    <div className={styles.container}>
			<Player />
      <div className={stylesSwitcher(background)}>
        <h1>{time}</h1>
        <h1>{date}</h1>
      </div>
    </div>
  );
}
