import React from "react";
import "./index.css";
import { Typography } from "antd";
import { IAboutProps } from "./types";
import messages  from "./messages";

const { Text } = Typography;

export const About = ({aboutText}: IAboutProps) => {
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
