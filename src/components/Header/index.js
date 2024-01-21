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
        <Header style={{ display: 'flex', justifyContent: "space-between"}}
          className={
            headerStyle === "transparent" ? "headerTransparent" : "headerSolid"
          }
        >
            <div
              className={
                headerStyle === "transparent"
                  ? "userNameTransparent"
                  : "userNameSolid"
              }
            >
              prateek.io
            </div>
          <span >
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
