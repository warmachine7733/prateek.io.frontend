import React from "react";
import "./index.css";
import { Typography } from "antd";
const { Text } = Typography;

export const About = () => {
  return (
    <div className="about">
      <div className="imageContainer">
        <img src="/assets/myPic.jpg" alt="profileImg" />
      </div>
      <div className="detailsContainer">
        {/* <h4>More info about me</h4> */}
        <p>
        I am a seasoned software developer with over 6 years and 1 month of experience in software development, specializing in web-based app development using technologies such as ReactJS, Redux, Material UI, Node.js, D3, npm, Firebase, Firestore, Bootstrap 4, and Context. My expertise spans various domains, including finance, telecom, social apps, HRM, property apps, and B2C app interactions for Verizon. I have a strong command of Git, Webpack 5, Babel, React Router v6, and have worked on Pipeline Groovy scripts and Docker deployment strategies. Additionally, I am well-versed in technologies like Node.js, MongoDB, Express.js, Next.js, React Native, and PWAs. My skills include testing methodologies using Jest, Enzyme, and Cypress, with a focus on developing secure and stable applications. I am dedicated to producing reusable and maintainable code.
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
                  <Text>Betnoti,Odisha,India</Text>
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
