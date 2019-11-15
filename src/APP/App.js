import React, { Component } from "react";
import "./App.css";
import LeaguesPage from "../Pages/Leagues/Leagues";
import "element-theme-default";

class App extends Component {
  render() {
    return (
      <>
        <LeaguesPage></LeaguesPage>
      </>
    );
  }
}

export default App;
