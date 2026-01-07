import React from "react";
import { Layout, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";


const { Header } = Layout;
const { Text } = Typography;
// const hyperLinks = ["Home", "About", "Career", "Blogs", "Contact"];
const hyperLinks = [];

export const HeaderComponent = ({
  headerStyle,
  handleFocus,
  selectedNavLink,
  textThemeColor,
  socialIds,
  openSocialAccount
}) => {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className={
            headerStyle === "transparent" ? "headerTransparent" : "headerSolid"
          }
        >
          <Text
            className={
              headerStyle === "transparent"
                ? "userNameTransparent"
                : "userNameSolid"
            }
          >
            prateek.io
          </Text>
          <span>
            {hyperLinks.map((each, i) => (
              <Text
                onClick={() => handleFocus(each)}
                key={i}
                className={
                  headerStyle === "transparent"
                    ? "navTextsTransparent"
                    : "navTextsSolid"
                }
                style={
                  selectedNavLink === each.toLocaleLowerCase()
                    ? { color: textThemeColor }
                    : { color: "white" }
                }
              >
                {each}
              </Text>
            ))}
          </span>
          <div className="socialIcon">
            {socialIds.map((each, i) => (
              <span
                key={i}

                onClick={() => openSocialAccount(each.name)}
              >
                <FontAwesomeIcon icon={each.icon} style={{ height: "25px", width: "25px", color: '#EFBF04' }} />
              </span>
            ))}
          </div>
        </Header>
      </Layout>
    </>
  );
};
