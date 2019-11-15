import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import LeaguesPage from "../Pages/Leagues/Leagues";
import TeamsPage from "../Pages/Teams/Teams";
import PlayersPage from "../Pages/Players/Players";
import "element-theme-default";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

class App extends Component {
  render() {
    let routes = (
      <>
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/leagues" component={LeaguesPage} />
          <Route path="/teams" component={TeamsPage} />
          <Route path="/players" component={PlayersPage} />
          <Route path="/" exact component={LeaguesPage} />
        </Switch>
      </>
    );
    return (
      <>
        <BrowserRouter>
          <>
            <NavBar></NavBar>
            {routes}
            <Footer></Footer>
          </>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
