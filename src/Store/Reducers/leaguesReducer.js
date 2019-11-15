import * as actionTypes from "../Actions/leaguesActions";
const initialState = {
  leaguesArray: [],
  LeaguesStaticArray: [
    {
      id: 2006,
      area: {},
      name: "WC Qualification",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {},
      numberOfAvailableSeasons: 1,
      lastUpdated: "2018-06-04T23:54:04Z"
    },
    {
      id: 2024,
      area: {
        id: 2011,
        name: "Argentina"
      },
      name: "Superliga Argentina",
      code: "ASL",
      emblemUrl: null,
      plan: "TIER_TWO",
      currentSeason: {
        id: 539,
        startDate: "2019-07-27",
        endDate: "2020-03-01",
        currentMatchday: 14,
        winner: null
      },
      numberOfAvailableSeasons: 3,
      lastUpdated: "2019-11-11T21:55:01Z"
    },
    {
      id: 2025,
      area: {
        id: 2011,
        name: "Argentina"
      },
      name: "Supercopa Argentina",
      code: null,
      emblemUrl: null,
      plan: "TIER_FOUR",
      currentSeason: {
        id: 430,
        startDate: "2019-04-04",
        endDate: "2019-04-04",
        currentMatchday: null,
        winner: null
      },
      numberOfAvailableSeasons: 2,
      lastUpdated: "2019-05-03T05:08:18Z"
    }
  ],
  detailedLeague: {
    id: 2006,
    count:7,
    area: {},
    name: "WC Qualification",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {},
    numberOfAvailableSeasons: 1,
    lastUpdated: "2018-06-04T23:54:04Z"
  }
};

const LeaguesReducer = (state = initialState, action) => {
  let newArr = [...state.leaguesArray];
  switch (action.type) {
    case actionTypes.GET_ALL_LEAGUES:
      newArr = action.payload;
      break;
    default:
      break;
  }

  return {
    ...state,
    leaguesArray: newArr
  };
};

export default LeaguesReducer;
