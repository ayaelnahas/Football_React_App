import React from "react";
import LeaguesList from "../../Containers/LeaguesList/LeaguesList";
import { Layout } from "element-react/next";

const Leagues = () => {
  return (
    <>
    <Layout.Row type="flex" justify="space-around"><LeaguesList></LeaguesList></Layout.Row> 
    </>
  );
};

export default Leagues;
