
export const GET_ALL_LEAGUES = "GET_ALL_LEAGUES";
export const SHOW_LEAGUE_DETAILS = "SHOW_LEAGUE_DETAILS";

export const getAllLeagues = data => {
  return { type: GET_ALL_LEAGUES, payload: data };
};

export const leagueDetails = id => {
  return { type: SHOW_LEAGUE_DETAILS };
};
