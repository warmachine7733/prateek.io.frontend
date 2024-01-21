import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import "./index.css";

const initialState = {
  whoami: ["Web Developer", "Linux Enthusiast", "PC Gamer"],
};

export const Intro = (props) => {
  const [intro, setIntro] = useState(initialState.whoami[0]);
  useEffect(() => {
    introHandler();
    return () => {
      clearTimeout(introHandler());
    };
  }, []);
  const introHandler = () => {
    let currentIndex = 0;

    function printRole() {
      setIntro(initialState.whoami[currentIndex]);
      currentIndex = (currentIndex + 1) % initialState.whoami.length;
    }
    // Set interval to run the printRole function every 9 second 9000 milliseconds)
    setInterval(printRole, 9000);
  };
  return (
    <div className="intro" style={{ height: props.availHeight }}>
      <Snowfall />
      <div className="introImage" style={{ height: props.availHeight }} />
      <div className="caption">
        <h4 className="greetings">Hi</h4>
        <h2 key={intro}>I am a {intro}</h2>  {/** key has been added so that react will understand there is a new node and rerender the css! */}
        <br />
      </div>
    </div>
  );
};
