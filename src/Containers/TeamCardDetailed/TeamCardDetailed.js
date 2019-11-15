import React, { Component } from "react";
import { Card } from "element-react/next";
import "./TeamCardDetailed.css";
import Image from "../../Assets/team.png";

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
      <div className="TeamCardDetailed">
        <Card className="BodyStyle">
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
            className="image"
          />
          <div style={{ padding: 10 }}>
            <h3>Detailed Team</h3>
            <div>Name: {this.state.DetailedTeam.name}</div>
            <div>Short Name: {this.state.DetailedTeam.shortName}</div>
            <div>Founded: {this.state.DetailedTeam.founded}</div>
            <div>Club Colors: {this.state.DetailedTeam.clubColors}</div>
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
