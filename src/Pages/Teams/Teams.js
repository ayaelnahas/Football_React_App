import React from "react";
import LeagueCardDetailed from "../../Containers/LeagueCardDetailed/LeagueCardDetailed";
import TeamsList from "../../Containers/TeamsList/TeamsList";
import { Layout } from "element-react/next";

const Teams = () => {
  return (
    <>
      <Layout.Row type="flex" justify="center">
        <Layout.Col span="12">
          <LeagueCardDetailed></LeagueCardDetailed>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" justify="space-around">
        <TeamsList></TeamsList>
      </Layout.Row>
    </>
  );
};

export default Teams;
