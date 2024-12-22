import React from "react";
import "./index.css";
import { Typography } from "antd";
const { Text } = Typography;

export const About = ({aboutText}) => {
  return (
    <div className="about">
      <div className="">
        {/* <img src="/assets/myPic.jpg" alt="profileImg" /> */}
      </div>
      <div className="">
        {/* <h4>More info about me</h4> */}
        <p>
          {aboutText}
        </p>
        <div className="personalDetails">
          <table>
            <tbody>
              <tr className="tableRow">
                {/* <td>
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <Text>Prateek Jena</Text>
                </td> */}
                <td>
                  <i className="fa fa-calendar-o" aria-hidden="true"></i>
                  <Text>28 March 1995</Text>
                </td>
                <td>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <Text>India</Text>
                </td>
              </tr>
              <tr className="tableRow">
                <td>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <Text>prateikjena@outlook.com</Text>
                </td>
                <td>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <Text><a href="tel:+91-7008398596">+91-7008398596</a></Text>
                </td>
                {/* <td>
                  <i className="fa fa-briefcase" aria-hidden="true"></i>
                  <Text>Developer</Text>
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
