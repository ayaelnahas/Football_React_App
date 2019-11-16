import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import "./App.css";
import "element-theme-default";
import {Loading} from 'element-react/next';
import LeaguesPage from "../Pages/Leagues/Leagues";
import TeamsPage from "../Pages/Teams/Teams";
import PlayersPage from "../Pages/Players/Players";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

class App extends Component {
  render() {
    const loading = this.props.isLoading ? (
      <Loading fullscreen={true} text="LOADING ......." />
    ) : null;

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
        {loading}
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

const mapStateToProps = state => {
  return {
    isLoading: state.loader
  };
};
export default connect(mapStateToProps, null)(App);
