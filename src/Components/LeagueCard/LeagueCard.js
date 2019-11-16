import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "element-react/next";
import "./LeagueCard.css";
import Image from "../../Assets/ball.jpg";

class LeagueCard extends Component {
  render() {
    return (
      <div className="LeagueCard">
        <Card className="BodyStyle">
          <div className='Ribbon'></div>
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
            className="image"
          />
          <div style={{ padding: 10 }}>
            <div className='Header'>Competition Name: {this.props.name}</div>
            <div className="bottom clearfix">
              <Link to="/teams">
                <Button type="text" className="button">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}


export default LeagueCard;
