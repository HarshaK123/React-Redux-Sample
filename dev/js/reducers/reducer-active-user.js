export default function (state={}, action) {
    console.log("reduce-active-user state ", ...state)
    switch(action.type){
        case "USER_SELECTED":
            return action.payload;
        break;
    }
    return state;
}