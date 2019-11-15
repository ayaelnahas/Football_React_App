import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import LeaguesList from "../../Containers/LeaguesList/LeaguesList";
import { Layout } from "element-react/next";

const Leagues = () => {
  return (
    <>
    <Layout.Row><NavBar></NavBar></Layout.Row>
    <Layout.Row type="flex" justify="space-around"><LeaguesList></LeaguesList></Layout.Row>
    <Layout.Row><Footer></Footer></Layout.Row>
      
      
      
    </>
  );
};

export default Leagues;
