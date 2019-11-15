import Axios from 'axios';
import LeaguesUrl from '../API/Config/url'

// - This file should have all CRUD operations for leagues entity.
// - Token should be from local storage, this is for trial only.
// - Only 'leagues list' will be fetched from the Web 'football.org', the rest of the -
// app will have a static data.

export const getAll = () => {
    console.log(LeaguesUrl)
    const token = '701a9b665de64ba68c12dfef2e0dec58';
    return Axios.get('http://api.football-data.org/v2/competitions', { headers: { 'X-Auth-Token': token } });
}

