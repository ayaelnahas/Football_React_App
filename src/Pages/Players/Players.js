import React from "react";
import TeamCardDetailed from "../../Containers/TeamCardDetailed/TeamCardDetailed";
import PlayersList from "../../Containers/PlayersList/PlayersList";
import { Layout } from "element-react/next";
import "./Players.css";

const Players = () => {
  return (
    <>
      <div className="PlayersPage">
        <Layout.Row type="flex" justify="center">
          <Layout.Col span="12">
            <TeamCardDetailed></TeamCardDetailed>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row type="flex" justify="space-around" className="Header">
          SQUAD LIST
        </Layout.Row>
        <Layout.Row type="flex" justify="space-around">
          <PlayersList></PlayersList>
        </Layout.Row>
      </div>
    </>
  );
};

export default Players;
