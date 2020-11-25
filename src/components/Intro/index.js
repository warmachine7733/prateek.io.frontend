import React from "react";
import Particles from "react-particles-js";

import "./index.css";

export class Intro extends React.Component {
  state = {
    whoami: ["Web Developer", "Linux Enthusiast", "PC Gamer"],
  };
  setCurrentRole = () => {
    // this.state.whoami.map(each=>)
    // setTimeout(,50)
  };
  componentDidMount() {
    this.setCurrentRole();
  }

  render() {
    return (
      <div className="intro" style={{ height: this.props.availHeight }}>
        <Particles
          className="introImage"
          style={{ height: this.props.availHeight }}
          // params={{
          //   particles: {
          //     number: {
          //       value: 150,
          //     },
          //     size: {
          //       value: 1,
          //     },
          //   },
          //   interactivity: {
          //     events: {
          //       onhover: {
          //         enable: true,
          //         mode: "repulse",
          //       },
          //     },
          //   },
          // }}
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}

          // params={{
          //   particles: {
          //     number: {
          //       value: 200,
          //       density: {
          //         enable: true,
          //       },
          //     },
          //     line_linked: {
          //       enable: true,
          //       opacity: 0.04,
          //     },
          //     move: {
          //       random: true,
          //       speed: 1,
          //       direction: "top",
          //       out_mode: "out",
          //     },
          //     size: {
          //       value: 1,
          //     },
          //     opacity: {
          //       anim: {
          //         enable: true,
          //         speed: 1,
          //         opacity_min: 0.07,
          //       },
          //     },
          //   },
          //   interactivity: {
          //     events: {
          //       onclick: {
          //         enable: true,
          //         mode: "repulse",
          //       },
          //     },
          //     modes: {
          //       repulse: {
          //         particles_nb: 10,
          //       },
          //     },
          //   },
          //   retina_detect: true,
          // }}
        />
        <div className="caption">
          <h4 className="greetings">Hi</h4>
          <h1>I AM PRATEEK JENA</h1>
          {/* <h2>Web Developer</h2> */}
        </div>
      </div>
    );
  }
}
