const initialState = {
  teamsArray: [
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
  ],
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

// This reducer will have no actions as the APIs are restricted,
// otherwise i would have selected teams based on League ID.

// this approach is only chosen to maintain the redux structure,
// but state could have been in the class itself.

const teamsReducer = (state = initialState, action) => {
  return {
    ...state
  };
};

export default teamsReducer;
