import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "element-react/next";
import "./LeagueCard.css";
import Image from "../../Assets/logo.jpg";

class LeagueCard extends Component {
  render() {
    return (
      <div className="LeagueCard">
        <Card className="BodyStyle">
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
            className="image"
          />
          <div style={{ padding: 10 }}>
            <span>Competition Name: {this.props.name}</span>
            <div className="bottom clearfix">
              <Button
                type="text"
                className="button"
                onClick={() => this.props.leagueDetails(this.props.id)}
              >
                Details
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.leagues.ll.id
  };
};

export default connect(mapStateToProps, null)(LeagueCard);
