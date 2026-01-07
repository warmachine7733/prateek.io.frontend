import React from "react";
import CarrerSteps from "./careerSteps";
import { ICareer } from "./types";
import messages from "./messages";
import "./index.css";

export const Career = ({
  selectedCareerTab,
  showCareerData,
  selectedCareerData,
}: ICareer) => {
  return (
    <div className="resumeContainer">
      <h4>{messages.Career}</h4>
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
                  <span>{messages.Experience}</span>
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
                  <span>{messages.Education}</span>
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
