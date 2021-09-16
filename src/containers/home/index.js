import React from "react";
import ReactDOM from "react-dom";
import { HeaderComponent } from "../../components/Header";
import { Intro } from "../../components/Intro";
import { About } from "../../components/About";
import { Career } from "../../components/Career";
import { Blogs } from "../../components/Blogs";
import { Contact } from "../../components/contact";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";


import { getMediumPosts, ipLookUp } from "../../store/home/action";
class Home extends React.Component {
  state = {
    headerStyle: "transparent",
    selectedNavLink: "home",
    textThemeColor: "#d6b161",
    selectedCareerTab: "work",
    selectedCareerData: [],
    endPoint:'http://127.0.0.1:9000'
  };
  handleScroll = () => {
    // console.log("scrolldata", window.scrollY);
    // console.log(
    //   "home",
    //   ReactDOM.findDOMNode(this.home).getBoundingClientRect()
    // );

    var scrollPosition = window.scrollY;
    if (scrollPosition < this.state.availHeight - 20) {
      this.setState({
        headerStyle: "transparent",
        selectedNavLink: "home",
      });
    } else if (
      scrollPosition > this.state.availHeight - 20 &&
      scrollPosition < 1399
    ) {
      this.setState({
        headerStyle: "solid",
        selectedNavLink: "about",
      });
    } else if (scrollPosition > 1399 && scrollPosition < 1900) {
      this.setState({
        headerStyle: "solid",
        selectedNavLink: "career",
      });
    } else if (scrollPosition > 1900 && scrollPosition < 2100) {
      this.setState({
        headerStyle: "solid",
        selectedNavLink: "blogs",
      });
    } else if (scrollPosition > 2100) {
      this.setState({
        headerStyle: "solid",
        selectedNavLink: "contact",
      });
    }
  };

  handleFocus = (value) => {
    const elementText = value.toLowerCase();
    this.setState({ selectedNavLink: elementText });
    const focusedElement = ReactDOM.findDOMNode(this[`${elementText}`]);

    focusedElement.scrollIntoView({ behavior: "smooth" });
  };
  showCareerData = (option) => {
    this.setState({
      selectedCareerData: this.props.career[`${option}`],
      selectedCareerTab: option,
    });
  };
  openSocialAccount = (account) => {
    const selectedAccount = this.props.socialIds.filter(
      (each) => each.name === account
    );
    const link = selectedAccount[0].link;
    window.open(link, "_blank");
  };
  getAvailWindowHeight = () => {
    // console.log(window.screen.availHeight);
    this.setState({ availHeight: window.screen.availHeight });
  };
  render() {
    // console.log(this.props.history);
    return (
      <div
        className="wrapper"
        style={{
          width: "100%",
          overflowY: "auto",
        }}
        ref={(scroller) => (this.scroller = scroller)}
        onScroll={this.handleScroll}
      >
        <HeaderComponent
          headerStyle={this.state.headerStyle}
          handleFocus={this.handleFocus}
          selectedNavLink={this.state.selectedNavLink}
          textThemeColor={this.state.textThemeColor}
        />
        <div ref={(home) => (this.home = home)}>
          <Intro 
            availHeight={this.state.availHeight} 
            particles ={this.props.particles}
          />
        </div>

        <div
          style={{
            backgroundColor: "white",
            overflowY: "hidden",
            overflowX: "hidden",
          }}
        >
          <div ref={(about) => (this.about = about)}>
            <About
              openSocialAccount={this.openSocialAccount}
              socialIds={this.props.socialIds}
            />
          </div>
          <div ref={(career) => (this.career = career)}>
            <Career
              showCareerData={this.showCareerData}
              selectedCareerTab={this.state.selectedCareerTab}
              selectedCareerData={this.state.selectedCareerData}
            />
          </div>
          <div ref={(blogs) => (this.blogs = blogs)}>
            <Blogs
              blogs={this.props.blogs}
              blogLoading={this.props.blogLoading}
              history = {this.props.history}
            />
          </div>
          <div ref={(contact) => (this.contact = contact)}>
            <Contact
              openSocialAccount={this.openSocialAccount}
              socialIds={this.props.socialIds}
              currentYear={this.props.currentYear}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    //selected by default data
    this.showCareerData(this.state.selectedCareerTab);

    this.props.ipLookUp();
    this.getAvailWindowHeight();
    this.props.getMediumPosts();
    // const socket = socketIOClient('http://localhost:8180/');
    // socket.on("connection",() => {
    //   console.log("okau socket data")
    // });
  }
}

const mapStateToProps = (state) => {
  return {
    career: state.home.career,
    socialIds: state.home.socialIds,
    blogs: state.home.blogs,
    blogLoading: state.home.blogLoading,
    currentYear:state.home.currentYear,
    particles:state.home.particleStyle
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMediumPosts: () => dispatch(getMediumPosts()),
    ipLookUp: () => dispatch(ipLookUp()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
