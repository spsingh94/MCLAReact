import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import IndexContainer from "./components/indexcontainer/indexContainer.js";
import About from "./Pages/About.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUS from "./Pages/About.js";

class App extends Component {
  render() {
    return (
      <div id="backgroundPic" class="img-fluid" alt="Responsive image">
        <Navbar />
        {/* //   <IndexContainer /> */}

        {/* <About /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/About" render={(props) => <AboutUS {...props} />} />
            {/* <Route
              path="/nucleo-icons"
              render={(props) => <NucleoIcons {...props} />}
            /> */}
            {/* <Route
              path="/landing-page"
              render={(props) => <LandingPage {...props} />}
            /> */}
            {/* <Route path="/About" render={(props) => <About {...props} />} />
            {/* <Route */}
            {/* path="/login-page"
              render={(props) => <LoginPage {...props} />}
            /> */}
            {/* <Redirect to="/index" />
              <Redirect from="/" to="/index" /> */}
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
