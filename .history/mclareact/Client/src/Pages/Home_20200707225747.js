import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import IndexContainer from "../components/indexcontainer/indexContainer";
import Scramble from "../components/indexcontainer/indexContainer";
class Home extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <Navbar />
        <IndexContainer />
      </div>
    );
  }
}
export default Home;
