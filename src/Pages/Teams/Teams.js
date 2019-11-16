import React from "react";
import LeagueCardDetailed from "../../Containers/LeagueCardDetailed/LeagueCardDetailed";
import TeamsList from "../../Containers/TeamsList/TeamsList";
import { Layout } from "element-react/next";
import "./Teams.css";

const Teams = () => {
  return (
    <>
      <div className="TeamsPage">
        <Layout.Row type="flex" justify="center">
          <Layout.Col span="12">
            <LeagueCardDetailed></LeagueCardDetailed>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row type="flex" justify="space-around" className="Header">
          TEAMS LIST
        </Layout.Row>
        <Layout.Row type="flex" justify="space-around">
          <TeamsList></TeamsList>
        </Layout.Row>
      </div>
    </>
  );
};

export default Teams;
