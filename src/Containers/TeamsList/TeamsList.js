import React, { Component } from "react";
import TeamCard from "../TeamCard/TeamCard";
import { Layout } from "element-react/next";

class LeaguesList extends Component {
  state = {
    teams: [
      {
        id: 758,
        name: "Uruguay",
        website: "http://www.auf.org.uy",
        email: "auf@auf.org.uy"
      },
      {
        id: 762,
        name: "Argentina",
        website: "http://www.afa.org.ar",
        email: "gerencia@afa.org.ar"
      },
      {
        id: 764,
        name: "Brazil",
        website: "http://www.cbf.com.br/",
        email: "cbf@cbf.com.br"
      },
      {
        id: 766,
        name: "Japan",
        website: "http://www.jfa.or.jp",
        email: "mary@jfa.or.jp"
      },
      {
        id: 769,
        name: "Mexico",
        website: "http://www.femexfut.org.mx",
        email: "femexfut@mpsnet.com.mx"
      },
      {
        id: 772,
        name: "Korea Republic",
        website: "http://www.kfa.or.kr",
        email: "kfainfo@kfa.or.kr"
      },
      {
        id: 776,
        name: "Nigeria",
        website: "http://www.thenff.com",
        email: null
      }
    ]
  };
  render() {
    return (
      <>
        <Layout.Col span="23">
          {this.state.teams.map((team, index) => {
            return (
              <Layout.Col key={index} lg="8" md="12" sm="24">
                <TeamCard
                  key={team.id}
                  name={team.name}
                  website={team.website}
                  email={team.email}
                ></TeamCard>
              </Layout.Col>
            );
          })}
        </Layout.Col>
      </>
    );
  }
}

export default LeaguesList;
