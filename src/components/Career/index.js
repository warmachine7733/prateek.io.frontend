import React from "react";
import "./index.css";
import { Typography } from "antd";
import CarrerSteps from "./careerSteps";

const { Text } = Typography;

export const Career = ({
  selectedCareerTab,
  showCareerData,
  selectedCareerData,
}) => {
  return (
    <div className="resumeContainer">
      <h4>Career</h4>
      <div className="togglerContainer">
        <div className="toggleIcons">
          <table>
            <tbody>
              <tr>
                <td
                  className="expTab"
                  style={
                    selectedCareerTab === "work"
                      ? { backgroundColor: "indigo" }
                      : { backgroundColor: "#444" }
                  }
                  onClick={() => showCareerData("work")}
                >
                  <i
                    className="fa fa-briefcase"
                    style={{ paddingRight: "4px" }}
                    aria-hidden="true"
                  ></i>
                  <Text>Experience</Text>
                </td>
                <td
                  className="eduTab"
                  style={
                    selectedCareerTab === "edu"
                      ? { backgroundColor: "indigo" }
                      : { backgroundColor: "#444" }
                  }
                  onClick={() => showCareerData("edu")}
                >
                  <i
                    className="fa fa-graduation-cap"
                    style={{ paddingRight: "4px" }}
                    aria-hidden="true"
                  ></i>
                  <Text>Education</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="stepsWrapper">
          <CarrerSteps selectedCareerData={selectedCareerData} />
        </div>
      </div>
    </div>
  );
};
