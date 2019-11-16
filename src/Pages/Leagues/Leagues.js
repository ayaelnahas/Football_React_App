import React from "react";
import LeaguesList from "../../Containers/LeaguesList/LeaguesList";
import { Layout } from "element-react/next";
import "./Leagues.css";

const Leagues = () => {
  return (
    <>
      <div className="LeaguesPage">
        <Layout.Row type="flex" justify="space-around" className="Header">
          COMPETITIONS LIST
        </Layout.Row>
        <Layout.Row type="flex" justify="space-around">
          <LeaguesList></LeaguesList>
        </Layout.Row>
      </div>
    </>
  );
};

export default Leagues;
