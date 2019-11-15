
export const GET_ALL_TEAMS = "GET_ALL_TEAMS";
export const SHOW_LEAGUE_DETAILS = "SHOW_LEAGUE_DETAILS";

export const getAllTeams = dispatch =>{
  return  dispatch ({ type: GET_ALL_TEAMS});
};
