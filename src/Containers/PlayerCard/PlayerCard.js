import React, { Component } from "react";
import { Card } from "element-react/next";
import "./PlayerCard.css";
import Image from "../../Assets/player.png";

class PlayerCard extends Component {
  render() {
    return (
      <div className="PlayerCard">
        <Card className="BodyStyle">
          <div className='Header'></div>
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
          />
          <div style={{ padding: 10 }}>
            <div>Name: {this.props.name}</div>
            <div>Position: {this.props.position}</div>
            <div>CountryOfBirth: {this.props.countryOfBirth}</div>
            <div>Nationality: {this.props.nationality}</div>
            <div>Role: {this.props.role}</div>
          </div>
        </Card>
      </div>
    );
  }
}

export default PlayerCard;
