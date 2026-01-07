import React from "react";
import { IAbout } from "./types";
import messages  from "./messages";
import "./index.css";


const About = ({aboutText}: IAbout) => {
  return (
    <div className="about">
      <div className="">
      </div>
      <div className="about-text">
        <p>
          {aboutText}
        
        </p>
        <div className="personalDetails">
          <table>
            <tbody>
              <tr className="tableRow">
                <td>
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <span>{messages.dob}</span>
                </td>
                <td>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span>{messages.country}</span>
                </td>
              </tr>
              <tr className="tableRow">
                <td>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>{messages.email}</span>
                </td>
                <td>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span><a className="tel-href" href={`${messages.tel}`}>{messages.tel}</a></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
