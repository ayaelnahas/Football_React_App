const initialState = {
  players: [
    {
      id: 6684,
      name: "László Bénes",
      position: "Midfielder",
      dateOfBirth: "1997-09-09T00:00:00Z",
      countryOfBirth: "Slovakia",
      nationality: "Slovakia",
      role: "PLAYER"
    },
    {
      id: 6687,
      name: "Denis Zakaria",
      position: "Midfielder",
      dateOfBirth: "1996-11-20T00:00:00Z",
      countryOfBirth: "Congo DR",
      nationality: "Switzerland",
      role: "PLAYER"
    },
    {
      id: 6688,
      name: "Mickaël Cuisance",
      position: "Midfielder",
      dateOfBirth: "1999-08-16T00:00:00Z",
      countryOfBirth: "France",
      nationality: "France",
      role: "PLAYER"
    },
    {
      id: 6689,
      name: "Aaron Herzog",
      position: "Midfielder",
      dateOfBirth: "1998-01-30T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "Germany",
      role: "PLAYER"
    },
    {
      id: 6690,
      name: "Fabian Johnson",
      position: "Attacker",
      dateOfBirth: "1987-12-11T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "United States",
      role: "PLAYER"
    },
    {
      id: 6691,
      name: "Raffael",
      position: "Attacker",
      dateOfBirth: "1985-03-28T00:00:00Z",
      countryOfBirth: "Brazil",
      nationality: "Brazil",
      role: "PLAYER"
    },
    {
      id: 6693,
      name: "Mike Feigenspan",
      position: "Attacker",
      dateOfBirth: "1995-08-05T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "Germany",
      role: "PLAYER"
    },
    {
      id: 6694,
      name: "Julio Villalba",
      position: "Attacker",
      dateOfBirth: "1998-09-11T00:00:00Z",
      countryOfBirth: "Paraguay",
      nationality: "Paraguay",
      role: "PLAYER"
    },
    {
      id: 7237,
      name: "Tsiy Ndenge",
      position: "Midfielder",
      dateOfBirth: "1997-06-21T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "Germany",
      role: "PLAYER"
    },
    {
      id: 8443,
      name: "Alassane Pléa",
      position: "Attacker",
      dateOfBirth: "1993-03-10T00:00:00Z",
      countryOfBirth: "France",
      nationality: "France",
      role: "PLAYER"
    },
    {
      id: 9522,
      name: "Florian Neuhaus",
      position: "Midfielder",
      dateOfBirth: "1997-03-16T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "Germany",
      role: "PLAYER"
    },
    {
      id: 10244,
      name: "Dieter Hecking",
      position: null,
      dateOfBirth: "1964-09-12T00:00:00Z",
      countryOfBirth: "Germany",
      nationality: "Germany",
      role: "COACH"
    },
    {
      id: 24192,
      name: "Andreas Poulsen",
      position: "Defender",
      dateOfBirth: "1999-10-13T00:00:00Z",
      countryOfBirth: "Denmark",
      nationality: "Denmark",
      role: "PLAYER"
    },
    {
      id: 56601,
      name: "Keanen Bennetts",
      position: "Attacker",
      dateOfBirth: "1999-03-09T00:00:00Z",
      countryOfBirth: "England",
      nationality: "England",
      role: "PLAYER"
    }
  ]
};

// This reducer will have no actions as the APIs are restricted,
// otherwise i would have selected players based on Team ID.

// This approach is only chosen to maintain the redux structure,
// but state could have been in the class itself.

const playersReducer = (state = initialState, action) => {
  return {
    ...state
  };
};

export default playersReducer;
