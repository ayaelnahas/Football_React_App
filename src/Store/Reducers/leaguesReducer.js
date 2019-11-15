import * as actionTypes from '../Actions/actions'
const initialState =
{
    leaguesArray: [],
    ll:[{
        id:11,
        name:'aya',

    }]
}

const LeaguesReducer = (state = initialState, action) => {
    let newArr = [...state.leaguesArray];
    switch (action.type) {
        case actionTypes.GET_ALL_LEAGUES:
            console.log('reducersss')
            newArr = action.payload
            break;
        default:
            break;
    }

    return {
        ...state,
        leaguesArray: newArr
    };

}

export default LeaguesReducer;