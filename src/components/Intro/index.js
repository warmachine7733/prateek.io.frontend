import React from "react";
// import Particles from "react-particles-js";
import Snowfall from 'react-snowfall'
import "./index.css";


export class Intro extends React.Component {
  state = {
    whoami: ["Web Developer", "Linux Enthusiast", "PC Gamer"],
  };
  setCurrentRole = () => {
    //chnage in odd and even months
    const currentMonth = new Date().getMonth()
    if(currentMonth%2===0){
      this.setState({index:0})
    }else{
      this.setState({index:1})

    }

  // console.log("ok month",new Date().getMonth())
  }
  componentDidMount() {
    this.setCurrentRole();
  }

  render() {
    // console.log("props",this.props)
    return (
      <>
      <div className="intro" style={{ height: this.props.availHeight }}>
      <Snowfall/>
        <div
          className="introImage"
          style={{ height: this.props.availHeight }}
          // params={this.props.particles[this.state.index]}
                  />
        <div className="caption">
          <h4 className="greetings">Hi</h4>
          {/* <h1>I AM PRATEEK JENA,</h1> */}
          <h2>I am a Web Developer</h2><br/>
          {/* <h2>Web Developer</h2> */}
          {/* <img style={{ width: "15rem" }} src="/assets/spddnb.gif" alt="spidey"/> */}
        </div>
      </div>
      </>
    );
  }
}
