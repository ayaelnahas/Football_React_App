import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "element-react/next";
import "./LeagueCard.css";
import Image from "../../Assets/logo.jpg";

class TeamCardDetailed extends Component {
  state = {
    DetailedTeam: {
      id: 18,
      name: "Borussia Mönchengladbach",
      shortName: "M'gladbach",
      tla: "BMG",
      founded: 1900,
      clubColors: "Black / White / Green",
      venue: "Stadion im Borussia-Park"
    }
  };
  render() {
    return (
      <div className="LeagueCardDetailed">
        <Card className="BodyStyle">
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
            className="image"
          />
          <div style={{ padding: 10 }}>
            <h3>Detailed League</h3>
            <div>Name: {this.props.DetailedTeam.name}</div>
            <div>Short Name: {this.props.DetailedTeam.shortName}</div>
            <div>Founded: {this.props.DetailedTeam.founded}</div>
            <div>Club Colors: {this.props.DetailedTeam.clubColors}</div>
          </div>
        </Card>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     DetailedTeam: state.teams.detailedTeam
//   };
// };

export default TeamCardDetailed;
