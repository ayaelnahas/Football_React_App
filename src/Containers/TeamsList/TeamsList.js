import React, { Component } from "react";
import { connect } from "react-redux";
import TeamCard from "../TeamCard/TeamCard";
import { Layout } from "element-react/next";

class TeamsList extends Component {
  render() {
    return (
      <>
        <Layout.Col span="23">
          {this.props.teams.map((team, index) => {
            return (
              <Layout.Col key={index} lg="8" md="12" sm="24">
                <TeamCard
                  key={team.id}
                  name={team.name}
                  website={team.website}
                  email={team.email}
                ></TeamCard>
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
    teams: state.teams.teamsArray
  };
};

export default connect(mapStateToProps,null)(TeamsList);
