/*const update  = (state, mutations) => {
    Object.assign({}, state, mutations)
}*/

export default function (state=[], action) {
        
    switch(action.type){
        case "USER_DELETED":
            return [ ...state, action.payload];
        break; 
        case "USER_UNDELETED":
            return state.filter(e => e !== action.payload);;
        break;
    }
    return state;
}