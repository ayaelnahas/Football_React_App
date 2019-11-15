import { combineReducers } from 'redux';
import leaguesReducer from './Reducers/leaguesReducer';
import teamsReducer from './Reducers/teamsReducer';
import playersReducer from './Reducers/playersReducer';

const rootReducer = combineReducers(
    {
        leagues: leaguesReducer,
        teams: teamsReducer,
        players: playersReducer
    }
);

export default rootReducer;