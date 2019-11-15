import axios from "axios";

export const GET_ALL_LEAGUES = "GET_ALL_LEAGUES";
export const SHOW_LEAGUE_DETAILS = "SHOW_LEAGUE_DETAILS";

export const getAllLeagues = data => {
  return { type: GET_ALL_LEAGUES, payload: data };
};

export const leagueDetails = id => {
  return dispatch => {
    axios
      .get(`https://users-35d13.firebaseio.com/users/${id}.json`)
      .then(response => {
        if (response.status === 200) {
          dispatch({ type: SHOW_LEAGUE_DETAILS });
        }
      });
  };
};
