import React, { Component } from "react";
import {connect} from 'react-redux'
import PlayerCard from "../PlayerCard/PlayerCard";
import { Layout } from "element-react/next";

class PlayersList extends Component {

  render() {
    return (
      <>
        <Layout.Col span="23">
          {this.props.players.map((player, index) => {
            return (
              <Layout.Col key={index} lg="8" md="12" sm="24">
                <PlayerCard
                  key={player.id}
                  name={player.name}
                  position={player.position}
                  countryOfBirth={player.countryOfBirth}
                  nationality={player.nationality}
                  role={player.role}
                ></PlayerCard>
              </Layout.Col>
            );
          })}
        </Layout.Col>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players.players
  };
};

export default connect(mapStateToProps, null)(PlayersList);
