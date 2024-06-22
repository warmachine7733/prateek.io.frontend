import React from "react";
// import Snowfall from "react-snowfall";
import ParticlesWrap from "./paricles";
import "./index.css";
import IntroText from "./IntroText";
import { useSelector } from "react-redux";
import { Audio } from "react-loader-spinner";

const Intro = (props) => {
  const gLoader = useSelector((state) => state.home.gLoader);
  console.log(gLoader);
  return (
    <div className="intro" style={{ height: props.availHeight }}>
      {/* <Snowfall /> */}
      <ParticlesWrap />
      {gLoader ? (
        <>
          <div className="introImage" style={{ height: props.availHeight }} />
          <div className="caption">
            <IntroText />
            <br />
          </div>
        </>
      ) : (
        <div className="gloaderWrapper">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(Intro);
