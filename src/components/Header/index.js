import React from "react";
import "./index.css";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Text } = Typography;
const hyperLinks = ["Home", "About", "Career", "Blogs", "Contact"];

export const HeaderComponent = ({
  headerStyle,
  handleFocus,
  selectedNavLink,
  textThemeColor,
  Ip,
}) => {
  return (
    <>
      <Layout>
        <Header
          className={
            headerStyle === "transparent" ? "headerTransparent" : "headerSolid"
          }
        >
          <span>
            <Text
              className={
                headerStyle === "transparent"
                  ? "userNameTransparent"
                  : "userNameSolid"
              }
            >
              prateek.io
            </Text>
          </span>
          <span style={{ position: "relative", left: "55%" }}>
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
        </Header>
      </Layout>
    </>
  );
};
