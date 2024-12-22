import React from "react";
import Snowfall from "react-snowfall";
// import ParticlesWrap from "./paricles";
import "./index.css";
import IntroText from "./IntroText";

const Intro = (props) => {
  return (
    <div className="intro" style={{ height: props.availHeight }}>
      <Snowfall />
      <div className="introImage" style={{ height: props.availHeight }} />
      <div className="caption">
        <IntroText />
        <br />
      </div>
    </div>
  );
};

export default React.memo(Intro);
