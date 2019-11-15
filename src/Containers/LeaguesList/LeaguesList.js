import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllLeagues, leagueDetails } from "../../Store/Actions/leaguesActions";
import LeagueCard from "../LeagueCard/LeagueCard";
import { Layout } from "element-react/next";
import * as leaguesAPI from "../../API/leaguesAPI";

class LeaguesList extends Component {
  componentDidMount() {
    console.log('list mounted')

    leaguesAPI.getAll()
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.props.getAllLeagues(response.data.competitions);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (this.props.leagues) {
      return (
        <>
          <Layout.Col span="23">
            {this.props.leagues.map((league, index) => {
              return (
                <Layout.Col key={index} lg="8" md="12" sm="24">
                  <LeagueCard
                    key={league.id}
                    name={league.name}
                    details={() => this.props.leagueDetails()}
                  ></LeagueCard>
                </Layout.Col>
              );
            })}
          </Layout.Col>
        </>
      );
    } 
  }
}

const mapStateToProps = state => {
  return {
    leagues: state.leagues.leaguesArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllLeagues: (data) => dispatch(getAllLeagues(data)),
    leagueDetails: dispatch(leagueDetails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaguesList);
