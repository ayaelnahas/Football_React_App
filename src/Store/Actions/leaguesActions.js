
export const GET_ALL_LEAGUES = "GET_ALL_LEAGUES";

export const getAllLeagues = data => {
  return { type: GET_ALL_LEAGUES, payload: data };
};
