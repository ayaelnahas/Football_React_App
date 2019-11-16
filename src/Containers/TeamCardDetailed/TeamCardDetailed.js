import React, { Component } from "react";
import { Card } from "element-react/next";
import {connect} from 'react-redux';
import "./TeamCardDetailed.css";
import Image from "../../Assets/team.png";

class TeamCardDetailed extends Component {

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
          <div className='BodyText' style={{ padding: 10 }}>
            <h3>Detailed Team</h3>
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

const mapStateToProps = state => {
  return {
    DetailedTeam: state.teams.DetailedTeam
  };
};

export default connect(mapStateToProps,null)(TeamCardDetailed);
