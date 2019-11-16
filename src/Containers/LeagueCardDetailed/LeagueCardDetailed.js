import React, { Component } from "react";
import { connect } from "react-redux";
import { Card} from "element-react/next";
import "./LeagueCardDetailed.css";
import Image from "../../Assets/ball.jpg";

class LeagueCardDetailed extends Component {
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
          <div className='BodyText' style={{ padding: 10 }}>
            <h3>Detailed League</h3>
            <div>Name: {this.props.DetailedLeague.name}</div>
            <div>No. of teams: {this.props.DetailedLeague.count}</div>
            <div>Plan: {this.props.DetailedLeague.plan}</div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    DetailedLeague: state.leagues.detailedLeague
  };
};

export default connect(mapStateToProps, null)(LeagueCardDetailed);
