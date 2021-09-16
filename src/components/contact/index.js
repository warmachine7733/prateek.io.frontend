import React from "react";
import "./index.css";
import { DiMongodb } from "react-icons/di";
import { SiRedux, SiFirebase } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
export const Contact = ({ socialIds, openSocialAccount,currentYear }) => {
  return (
    <div className="contactContainer">
      <div className="copyrightMsg">© {currentYear} prateek.io</div>
      <div className="socialIcon">
        {socialIds.map((each, i) => (
          <i
            key={i}
            className={`fa fa-${each.name}`}
            onClick={() => openSocialAccount(each.name)}
          ></i>
        ))}
      </div>
      <div className="techStack">
        {/* <img src="/logo192.png" alt="react" /> */}
        <FaReact className="svgIcon" />
        <SiRedux className="svgIcon" />
        <FaNodeJs className="svgIcon" />
        <DiMongodb className="svgIcon" />
        <SiFirebase className="svgIcon" />
      </div>
    </div>
  );
};
