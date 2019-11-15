import React from "react";
import TeamCardDetailed from "../../Containers/TeamCardDetailed/TeamCardDetailed";
import PlayersList from "../../Containers/PlayersList/PlayersList";
import { Layout } from "element-react/next";

const Players = () => {
  return (
    <>
    <h2>Players</h2>
      <Layout.Row type="flex" justify="center">
        <Layout.Col span="12">
          <TeamCardDetailed></TeamCardDetailed>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row type="flex" justify="space-around">
        <PlayersList></PlayersList>
      </Layout.Row>
    </>
  );
};

export default Players;
