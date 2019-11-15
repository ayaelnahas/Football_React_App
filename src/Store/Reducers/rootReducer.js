import { combineReducers } from 'redux';
import leaguesReducer from './leaguesReducer';
import teamsReducer from './teamsReducer';
import playersReducer from './playersReducer';

const rootReducer = combineReducers(
    {
        leagues: leaguesReducer,
        teams: teamsReducer,
        players: playersReducer
    }
);

export default rootReducer;