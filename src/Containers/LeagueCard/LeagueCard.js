import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "element-react/next";
import "./LeagueCard.css";


class LeagueCard extends Component {
  render() {
    return (
      <Card className="BodyStyle">
        <img src={this.props.imgSrc} className="image" />
        <div style={{ padding: 10 }}>
          <span>Competition Name: {props.name}</span>
          <div className="bottom clearfix">
            <Link>
              <Button
                type="text"
                className="button"
                onClick={() => props.leagueDetails(this.props.id)}
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
      id: state.rootReducer.leaguesArray.id
  }

};

export default connect(mapStateToProps, null)(LeagueCard);
