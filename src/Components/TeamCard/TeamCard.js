import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "element-react/next";
import "./TeamCard.css";
import Image from "../../Assets/team.png";

class TeamCard extends Component {
  render() {
    return (
      <div className="TeamCard">
        <Card className="BodyStyle">
          <div className='Header'></div>
          <img
            src={Image}
            style={{ width: "5rem" }}
            alt="..."
            className="image"
          />
          <div  className='BodyText' style={{ padding: 10 }}>
            <div>Name: {this.props.name}</div>
            <div>Website: {this.props.website}</div>
            <div>Email: {this.props.email}</div>
            <div className="bottom clearfix">
              <Link to="/players">
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

export default TeamCard;
