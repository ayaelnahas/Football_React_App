import { combineReducers } from 'redux';
import leaguesReducer from './Reducers/leaguesReducer';
import teamsReducer from './Reducers/teamsReducer';
import playersReducer from './Reducers/playersReducer';
import loadingReducer from './Reducers/loadingReducer'

const rootReducer = combineReducers(
    {
        leagues: leaguesReducer,
        teams: teamsReducer,
        players: playersReducer,
        loader:loadingReducer
    }
);

export default rootReducer;