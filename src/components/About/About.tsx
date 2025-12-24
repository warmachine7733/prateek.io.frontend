import React from "react";
import { Typography } from "antd";
import { IAbout } from "./types";
import messages  from "./messages";
import "./index.css";

const { Text } = Typography;

const About = ({aboutText}: IAbout) => {
  return (
    <div className="about">
      <div className="">
      </div>
      <div className="">
        <p>
          {aboutText}
        </p>
        <div className="personalDetails">
          <table>
            <tbody>
              <tr className="tableRow">
                <td>
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <Text>{messages.dob}</Text>
                </td>
                <td>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <Text>{messages.country}</Text>
                </td>
              </tr>
              <tr className="tableRow">
                <td>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <Text>{messages.email}</Text>
                </td>
                <td>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <Text><a href={`${messages.tel}`}>{messages.tel}</a></Text>
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
