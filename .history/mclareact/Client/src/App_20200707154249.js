import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Index
import Navbar from "./components/Navbar/Navbar.js";
import IndexContainer from "./components/indexcontainer/indexContainer.js";
import About from "./Pages/About.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <Navbar />
      {/* //   <IndexContainer /> */}
      {/* // <Footer/> */}
       
      {/* // <div>
      //   <About />
      // </div> */}
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/" render={(props) => <IndexContainer {...props} />} />
            {/* <Route
              path="/nucleo-icons"
              render={(props) => <NucleoIcons {...props} />}
            /> */}
            {/* <Route
              path="/landing-page"
              render={(props) => <LandingPage {...props} />}
            /> */}
            <Route
              path="/profile-page"
              render={(props) => <ProfilePage {...props} />}
            />
            {/* <Route
              path="/login-page"
              render={(props) => <LoginPage {...props} />}
            /> */}
            <Redirect to="/index" />
            <Redirect from="/" to="/index" />
          </Switch>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
